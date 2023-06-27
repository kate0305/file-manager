import { chdir, cwd } from 'node:process';
import { currentDir } from '../curDir.js';

export const getUpDir = async () => {
  try {
    chdir('..');
    const curDirr = cwd();
    currentDir.setDir(curDirr);
  } catch (error) {
    console.log('Operation failed!');
  }
};