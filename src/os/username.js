import { userInfo } from 'node:os';

export const getUserName = () => {
  const userData = userInfo();
  console.log(userData.username);
};