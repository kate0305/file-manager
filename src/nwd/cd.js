import { chdir } from 'node:process';

export const cdDir = async (path) => {
  try {
    chdir(path);
  } catch (error) {
    console.log('Operation failed!');
  }
};