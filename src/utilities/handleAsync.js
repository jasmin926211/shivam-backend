const handleAsync = (promise) =>
  promise.then((data) => [data, undefined]).catch((error) => Promise.resolve([undefined, error]));

export default handleAsync;
