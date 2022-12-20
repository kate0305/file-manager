import { rm } from 'node:fs/promises';
import { isExistFile } from './existFile.js';

export const deleteFile = async (pathFile) => {
  try {
    const path1 = await isExistFile(pathFile);
      if (!path1) throw new Error('Operation failed!');
    await rm(pathFile);
    console.log('File deleted!');
  } catch (error) {
    console.log(error.message);
  };
};
