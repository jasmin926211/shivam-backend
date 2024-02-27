import logger from '#/logger';

// eslint-disable-next-line no-unused-vars
const errorHandling = (err, req, res, _next) => {
  if (err.statusCode && err.title) {
    res.status(err.statusCode).json({
      error: {
        title: err.title,
        description: err.description,
      },
      type: err.type,
    });
  } else if (err.code === 11000) {
    logger.error(`Uncaught mongoose duplicate key error occurred status : 500 ${err}`);
    const value = err.errmsg.match(/(["'])(?:(?=(\\?))\2.)*?\1/)[0];
    res.status(500).json({
      error: {
        title: 'Internal Server Error',
        description: `Duplicate field value: ${value}. Please use anothe value!`,
      },
    });
  } else {
    logger.error(`Uncaught error occurred status : 500 ${err}`);
    res.status(500).json({
      error: {
        title: 'Request timed out',
        description: 'Request has timed out, please try again',
      },
      type: err.type,
    });
  }
};

export default errorHandling;
