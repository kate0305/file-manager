import { chdir, cwd } from 'node:process';

export const getUpDir = async () => {
  try {
    chdir('..');
  } catch (error) {
    console.log('Operation failed!');
  }
};