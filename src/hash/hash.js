import { createHash } from 'node:crypto';
import { readFile } from 'node:fs/promises';

export const calculateHash = async (pathFile) => {
  try {
    const content = await readFile(pathFile);
    const hash = createHash('sha256').update(content).digest('hex'); 
    console.log(hash);
  } catch (error) {
    console.log('No such file exists');
    console.log(error);
  }
};