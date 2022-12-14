import { homedir } from 'node:os';

export const getHomeDir = () => {
  console.log(homedir());
};