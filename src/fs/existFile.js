import { access } from 'node:fs/promises';

export const isExistFile = async (path) => {  
  try {
    await access(path)
    return true
  } catch {
    return false
  };
};

