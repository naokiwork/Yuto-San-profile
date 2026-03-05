import { spawn } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projectRoot = path.resolve(__dirname, '../..'); // Assuming scripts/deploy-with-retry.mjs is in profile-webapp/scripts

// Assert package.json exists
import fs from 'fs';
const packageJsonPath = path.join(projectRoot, 'package.json');
if (!fs.existsSync(packageJsonPath)) {
  console.error(`Error: package.json not found at expected path: ${packageJsonPath}`);
  process.exit(1);
}

const MAX_RETRIES = 5;
const BACKOFF_SCHEDULE = [2000, 5000, 12000, 30000, 60000]; // milliseconds

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function deployWithRetry() {
  // Run predeploy steps first
  console.log("Running pre-deploy checks and build...");
  const predeployProcess = spawn(
    'npm',
    ['run', 'predeploy'],
    {
      stdio: 'inherit',
      cwd: projectRoot, // Ensure it runs in the correct working directory
    }
  );

  await new Promise((resolve, reject) => {
    predeployProcess.on('close', (code) => {
      if (code === 0) {
        console.log("Pre-deploy checks and build successful.");
        resolve();
      } else {
        reject(new Error(`Pre-deploy failed with code ${code}`));
      }
    });
    predeployProcess.on('error', (err) => {
      reject(err);
    });
  });

  for (let i = 0; i < MAX_RETRIES; i++) {
    try {
      console.log(`Attempt ${i + 1}/${MAX_RETRIES}: Deploying with wrangler...`);
      const wranglerProcess = spawn(
        'npx',
        ['wrangler@4.69.0', 'deploy', '--minify'],
        {
          stdio: 'inherit',
          env: {
            ...process.env,
            WRANGLER_LOG_PATH: process.env.WRANGLER_LOG_PATH || '/tmp/wrangler.log',
          },
          cwd: projectRoot, // Ensure it runs in the correct working directory
        }
      );

      await new Promise((resolve, reject) => {
        wranglerProcess.on('close', (code) => {
          if (code === 0) {
            resolve();
          } else {
            reject(new Error(`Wrangler process exited with code ${code}`));
          }
        });
        wranglerProcess.on('error', (err) => {
          reject(err);
        });
      });

      console.log('Wrangler deploy successful.');
      return;
    } catch (error) {
      console.error(`Wrangler deploy failed (attempt ${i + 1}/${MAX_RETRIES}):`);
      console.error(error.message);

      const errorMessage = error.message;
      if (
        errorMessage.includes('502 Bad Gateway') ||
        errorMessage.includes('malformed response') ||
        error.message.includes('exited with code') // Catch any non-zero exit code
      ) {
        if (i < MAX_RETRIES - 1) {
          const delay = BACKOFF_SCHEDULE[i];
          console.log(`Retrying in ${delay / 1000} seconds...`);
          await sleep(delay);
        } else {
          console.error('Max retries reached. Deployment still failing.');
          console.error('Diagnostic: Deployment likely failed due to transient Cloudflare API issue, auth token expiry, or a persistent configuration error.');
          console.error('Suggestion: Please re-run the deploy command locally with WRANGLER_LOG_LEVEL=debug or check Cloudflare dashboard for detailed error logs.');
          process.exit(1);
        }
      } else {
        console.error('Wrangler deploy failed with an unexpected error. Exiting.');
        process.exit(1);
      }
    }
  }
}

deployWithRetry();
