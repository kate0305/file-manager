import { chdir, cwd } from 'node:process';
import { currentDir } from '../curDir.js';

export const cdDir = async (path) => {
  try {
    chdir(path);
    const curDirr = cwd();
    currentDir.setDir(curDirr);
  } catch (error) {
    console.log('Operation failed!');
  }
};