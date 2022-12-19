import { cpus } from 'node:os';

export const getCpus = async () => {
  const getCpus = cpus();
  console.log(`Overall amount of CPUs are ${getCpus.length}`);
  getCpus.map(({ model, speed }, index) => {
    const clockRate = `${(speed / 1000).toFixed(2)}GHz`;
    console.log(`CPU-${index + 1} model: ${model}; clock rate: ${clockRate}`)
  });
};