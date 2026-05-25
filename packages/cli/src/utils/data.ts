import fs from 'fs-extra';
import path from 'path';

export async function readJson<T>(filePath: string): Promise<T | null> {
  try {
    if (await fs.pathExists(filePath)) {
      return await fs.readJson(filePath);
    }
    return null;
  } catch (error) {
    console.error(`Error reading ${filePath}:`, error);
    return null;
  }
}

export async function writeJson(filePath: string, data: any): Promise<void> {
  try {
    await fs.ensureDir(path.dirname(filePath));
    await fs.writeJson(filePath, data, { spaces: 2 });
  } catch (error) {
    console.error(`Error writing ${filePath}:`, error);
  }
}
