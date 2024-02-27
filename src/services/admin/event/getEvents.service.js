import Event from 'models/Event';

import logger from '#/logger';
import { InternalServerException } from '#/utilities/exceptions';
import handleAsync from '#/utilities/handleAsync';

const getEvents = async () => {
  try {
    logger.info('Entry log : Executing getEvents service');

    const [events, error] = await handleAsync(Event.find());

    if (error) {
      throw new InternalServerException('Internal Server Error', error);
    }

    logger.info('Exit log : Executed getEvents service successfully');

    return Promise.resolve(events);
  } catch (error) {
    logger.error(`Exit log : Error occurred at getEvents service ${error.stack || error}`);

    if (error.statusCode || error.code) {
      return Promise.reject(error);
    }

    return Promise.reject(new InternalServerException('Something went wrong', error));
  }
};

export default getEvents;
