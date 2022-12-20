export const parseArgs = (str) => {
  const arrArgs = str.match(/[^\s"]+|"([^"]*)"/g).map(arg => {
    return arg.replaceAll('"', '')
  });
  const paths = arrArgs.slice(1);
    return {
      'command': arrArgs[0],
      'args': paths,
    };
  };