export const sayWelcome = async() => {
  try {
    const userName = process.argv.slice(2).join().split('=')[1];
    return userName ? userName : 'Anonymous';
  } catch (error) {
    console.log(error.message);
  }
};