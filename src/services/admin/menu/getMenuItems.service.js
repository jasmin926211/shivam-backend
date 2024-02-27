import Category from 'models/Category';
import Menu from 'models/Menu';

import logger from '#/logger';
import { InternalServerException, ResourceNotFoundException } from '#/utilities/exceptions';
import handleAsync from '#/utilities/handleAsync';

const getMenuItems = async (categoryId, queryParams) => {
  try {
    logger.info('Entry log : Executing getMenuItems service');

    const category = await Category.findById(categoryId);

    if (!category) {
      return Promise.reject(new ResourceNotFoundException('Category not found'));
    }

    const { searchText } = queryParams;

    const searchQuery = {
      category: categoryId,
      name: { $regex: searchText, $options: 'i' }, // Case-insensitive search for name
    };

    const [events, error] = await handleAsync(Menu.find(searchQuery));

    if (error) {
      throw new InternalServerException('Internal Server Error', error);
    }

    logger.info('Exit log : Executed getMenuItems service successfully');

    return Promise.resolve(events);
  } catch (error) {
    logger.error(`Exit log : Error occurred at getMenuItems service ${error.stack || error}`);

    if (error.statusCode || error.code) {
      return Promise.reject(error);
    }

    return Promise.reject(new InternalServerException('Something went wrong', error));
  }
};

export default getMenuItems;
