import { basename, join } from 'node:path';

export const createPath = async (oldPath, newPath) => {
  const fileName = basename(oldPath);
  const pathTo = join(newPath, fileName);
  return pathTo;
}