import Event from 'models/Event';

import logger from '#/logger';
import { InternalServerException } from '#/utilities/exceptions';
import generateSuccessResponse from '#/utilities/generateResponse';

const createEvent = async (requestBody) => {
  try {
    logger.info('Entry log : Executing createEvent service');

    const event = await Event.create(requestBody);

    logger.info('Exit log : Executed createEvent service successfully');

    return Promise.resolve(
      generateSuccessResponse('Event created successfully', {
        id: event._id,
      }),
    );
  } catch (error) {
    logger.error(`Exit log : Error occurred at createEvent service ${error.stack || error}`);

    if (error.statusCode || error.code) {
      return Promise.reject(error);
    }

    return Promise.reject(new InternalServerException('Something went wrong', error));
  }
};

export default createEvent;
