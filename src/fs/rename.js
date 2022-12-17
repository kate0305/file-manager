import { rename } from 'node:fs/promises';
import { exist } from '../utils.js';

export const renameFile = async (pathOldFile, pathNewFile) => {
  try {
    if (await exist(pathNewFile)) throw new Error('Operation failed!');
    await rename(pathOldFile, pathNewFile);
    console.log('File renamed!');
  } catch (error) {
    console.log(error.message);
  }
};