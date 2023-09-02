/* eslint-disable no-unused-expressions */
import logger from '#/config/logger';

import generateException from './generateException';

class ConflictException extends Error {
  constructor(exception, data) {
    super();
    data ? logger.error(`${exception} ${data}`) : logger.error(exception);
    generateException(this, 409, 'Conflict', exception);
  }
}

export default ConflictException;
