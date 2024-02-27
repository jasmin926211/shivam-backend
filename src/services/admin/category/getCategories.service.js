import Category from 'models/Category';

import logger from '#/logger';
import { InternalServerException } from '#/utilities/exceptions';
import handleAsync from '#/utilities/handleAsync';

const getCategories = async () => {
  try {
    logger.info('Entry log : Executing getCategories service');

    const [events, error] = await handleAsync(Category.find());

    if (error) {
      throw new InternalServerException('Internal Server Error', error);
    }

    logger.info('Exit log : Executed getCategories service successfully');

    return Promise.resolve(events);
  } catch (error) {
    logger.error(`Exit log : Error occurred at getCategories service ${error.stack || error}`);

    if (error.statusCode || error.code) {
      return Promise.reject(error);
    }

    return Promise.reject(new InternalServerException('Something went wrong', error));
  }
};

export default getCategories;
