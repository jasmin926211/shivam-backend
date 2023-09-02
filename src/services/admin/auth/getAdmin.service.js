import Admin from 'models/Admin';

import logger from '#/logger';
import { InternalServerException, ResourceNotFoundException } from '#/utilities/exceptions';
import handleAsync from '#/utilities/handleAsync';

const getAdmin = async (userId) => {
  try {
    logger.info('Entry log : Executing getAdmin service');

    const [user, error] = await handleAsync(Admin.findOne({ _id: userId }, { password: 0, __v: 0 }));

    if (error) {
      throw new InternalServerException('Internal Server Error', error);
    }

    if (!user) {
      throw new ResourceNotFoundException('User not found');
    }

    logger.info('Exit log : Executed getAdmin service successfully');

    return Promise.resolve(user);
  } catch (error) {
    logger.error(`Exit log : Error occurred at getAdmin service ${error.stack || error}`);

    if (error.statusCode || error.code) {
      return Promise.reject(error);
    }

    return Promise.reject(new InternalServerException('Something went wrong', error));
  }
};

export default getAdmin;
