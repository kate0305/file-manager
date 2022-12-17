import { rm } from 'node:fs/promises';

export const deleteFile = async (pathFile) => {
  try {
    await rm(pathFile);
    console.log('File deleted!');
  } catch (error) {
    console.log(error.message);
  };
};
