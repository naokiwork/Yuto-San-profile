import { execa } from 'execa';

const MAX_RETRIES = 5;
const BACKOFF_SCHEDULE = [2000, 5000, 12000, 30000, 60000]; // milliseconds

async function deployWithRetry() {
  for (let i = 0; i < MAX_RETRIES; i++) {
    try {
      console.log(`Attempt ${i + 1}/${MAX_RETRIES}: Deploying with wrangler...`);
      const { stdout, stderr } = await execa(
        'npx',
        ['wrangler@4.69.0', 'deploy', '--minify'],
        {
          stdio: 'inherit',
          env: {
            ...process.env,
            WRANGLER_LOG_PATH: '/tmp/wrangler.log',
          },
        }
      );
      console.log('Wrangler deploy successful.');
      return;
    } catch (error) {
      console.error(`Wrangler deploy failed (attempt ${i + 1}/${MAX_RETRIES}):`);
      console.error(error.message);

      const errorMessage = error.message + (error.stderr || '');
      if (
        errorMessage.includes('502 Bad Gateway') ||
        errorMessage.includes('malformed response') ||
        error.exitCode !== 0
      ) {
        if (i < MAX_RETRIES - 1) {
          const delay = BACKOFF_SCHEDULE[i];
          console.log(`Retrying in ${delay / 1000} seconds...`);
          await new Promise((resolve) => setTimeout(resolve, delay));
        } else {
          console.error('Max retries reached. Deployment still failing.');
          console.error('Diagnostic: Deployment likely failed due to transient Cloudflare API issue or auth token expiry.');
          console.error('Suggestion: Please re-run the deploy command locally or check Cloudflare dashboard for detailed error logs.');
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
