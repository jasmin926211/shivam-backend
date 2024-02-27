import logger from '#/logger';

import generateException from './generateException';

class ForbiddenException extends Error {
  constructor(exception, data) {
    super();
    // eslint-disable-next-line no-unused-expressions
    data ? logger.error(`${exception} ${data}`) : logger.error(exception);
    generateException(this, 403, 'Forbidden', exception);
  }
}

export default ForbiddenException;
