import { rename } from 'node:fs/promises';
import { isExistFile } from './existFile.js';

export const renameFile = async (pathOldFile, pathNewFile) => {
  try {
    const oldPath = await isExistFile(pathOldFile);
    const newPath = await isExistFile(pathNewFile);
    if (!oldPath || newPath) throw new Error('Operation failed!');
    await rename(pathOldFile, pathNewFile);
    console.log('File renamed!');
  } catch (error) {
    console.log(error.message);
  }
};