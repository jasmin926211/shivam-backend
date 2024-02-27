import Menu from 'models/Menu';

import logger from '#/logger';
import { InternalServerException } from '#/utilities/exceptions';
import generateSuccessResponse from '#/utilities/generateResponse';

const createMenuItems = async (requestBody) => {
  try {
    logger.info('Entry log : Executing createMenuItems service');

    const category = await Menu.create(requestBody);

    logger.info('Exit log : Executed createMenuItems service successfully');

    return Promise.resolve(
      generateSuccessResponse('Menu item created successfully', {
        id: category._id,
      }),
    );
  } catch (error) {
    logger.error(`Exit log : Error occurred at createMenuItems service ${error.stack || error}`);

    if (error.statusCode || error.code) {
      return Promise.reject(error);
    }

    return Promise.reject(new InternalServerException('Something went wrong', error));
  }
};

export default createMenuItems;
