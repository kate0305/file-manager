import { homedir } from 'node:os';

export const getHomeDir = async () => {
  console.log(homedir());
};