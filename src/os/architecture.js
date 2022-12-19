import { arch } from 'node:os';

export const getArchitecture = async () => {
  console.log(arch());
};