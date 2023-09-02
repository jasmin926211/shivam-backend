/* eslint-disable no-unused-expressions */
import logger from '#/logger';

import generateException from './generateException';

class InternalServerException extends Error {
  constructor(exception, data) {
    super();
    data ? logger.error(`${exception} ${data}`) : logger.error(exception);
    generateException(this, 500, 'Internal Server Error', exception);
  }
}

export default InternalServerException;
