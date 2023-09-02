import Category from 'models/Category';

import logger from '#/logger';
import { InternalServerException } from '#/utilities/exceptions';
import generateSuccessResponse from '#/utilities/generateResponse';

const createCategory = async (requestBody) => {
  try {
    logger.info('Entry log : Executing createCategory service');

    const category = await Category.create(requestBody);

    logger.info('Exit log : Executed createCategory service successfully');

    return Promise.resolve(
      generateSuccessResponse('Category created successfully', {
        id: category._id,
      }),
    );
  } catch (error) {
    logger.error(`Exit log : Error occurred at createCategory service ${error.stack || error}`);

    if (error.statusCode || error.code) {
      return Promise.reject(error);
    }

    return Promise.reject(new InternalServerException('Something went wrong', error));
  }
};

export default createCategory;
