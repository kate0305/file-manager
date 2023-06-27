import { homedir } from 'node:os';

export const currentDir = {
  homedir: homedir(),
  setDir(path) {
    return this.homedir = path;
  },
  getDir() {
    return this.homedir;
  }
};