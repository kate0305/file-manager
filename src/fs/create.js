import { open } from 'node:fs/promises';

export const createFile = async (pathFile) => {
    try {
      await open(pathFile, 'wx+');
      console.log('File created!');
    } catch (error) {
        console.log(error.message);
    };
};