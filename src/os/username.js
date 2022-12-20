import { userInfo } from 'node:os';

export const getUserName = async () => {
  const userData = userInfo();
  console.log(userData.username);
};