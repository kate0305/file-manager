import { parseArgs } from './parseArgs.js'

export const validateCommand = async (str) => {
  const commands = ['up', 'cd', 'ls', 'cat', 'add', 'rn', 'cp', 'mv', 'rm', 'os', 'hash', 'compress', 'decompress', '.exit'];
  try {
    const { command } = parseArgs(str);
    if (commands.includes(command)) {
      return command;
    } else {
      throw new Error('Invalid input')
    }
  } catch (error) {
    console.log(error.message);
  } 
};