import { parseArgs } from './parseArgs.js';
import { resolve } from 'node:path';
import { cwd } from 'node:process';

export const getPath = async (str) => {
  try {
    const { args } = parseArgs(str);
    if (!args.length) throw new Error('Invalid input');
    const paths = args.map(arg => {
      return resolve(cwd(), arg);
    });
    return paths;
  } catch (error) {
    console.log(error.message);
  }
};