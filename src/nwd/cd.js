import { chdir, cwd } from 'node:process';
//import { getCurDir } from '../curDir.js';
import { currentDir } from '../curDir.js';

export const cdDir = async (path) => {
  try {
    chdir(path);
    const curDirr = cwd();
    currentDir.setDir(curDirr)
    //return await getCurDir(curDirr);
  } catch (error) {
    console.log('Operation failed!');
  }
};