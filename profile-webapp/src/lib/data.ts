import { promises as fs } from 'fs';
import path from 'path';

export async function getProfileData() {
  const filePath = path.join(process.cwd(), 'data', 'profile.json');
  const fileContents = await fs.readFile(filePath, 'utf8');
  return JSON.parse(fileContents);
}

export async function getProjectsData() {
  const filePath = path.join(process.cwd(), 'data', 'projects.json');
  const fileContents = await fs.readFile(filePath, 'utf8');
  return JSON.parse(fileContents);
}

export async function getWritingData() {
  const filePath = path.join(process.cwd(), 'data', 'writing.json');
  const fileContents = await fs.readFile(filePath, 'utf8');
  return JSON.parse(fileContents);
}
