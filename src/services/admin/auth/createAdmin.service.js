import bcrypt from 'bcrypt';

import Admin from 'models/Admin';

import logger from '#/logger';
import { InternalServerException } from '#/utilities/exceptions';
import generateSuccessResponse from '#/utilities/generateResponse';

const createAdmin = async (requestBody) => {
  try {
    logger.info('Entry log : Executing createAdmin service');
    const encryptedPassword = bcrypt.hashSync(requestBody.password, 10);

    const admin = await Admin.create({ ...requestBody, password: encryptedPassword });

    logger.info('Exit log : Executed createAdmin service successfully');

    return Promise.resolve(
      generateSuccessResponse('Admin created successfully', {
        id: admin._id,
      }),
    );
  } catch (error) {
    logger.error(`Exit log : Error occurred at createAdmin service ${error.stack || error}`);

    if (error.statusCode || error.code) {
      return Promise.reject(error);
    }

    return Promise.reject(new InternalServerException('Something went wrong', error));
  }
};

export default createAdmin;
