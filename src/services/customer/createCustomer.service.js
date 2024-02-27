import Customer from 'models/Customer';

import logger from '#/logger';
import { InternalServerException } from '#/utilities/exceptions';
import generateSuccessResponse from '#/utilities/generateResponse';
import handleAsync from '#/utilities/handleAsync';

const createCustomer = async (requestBody) => {
  try {
    logger.info('Entry log : Executing createCustomer service');

    const [customer, error] = await handleAsync(Customer.create(requestBody));

    if (error) {
      throw new InternalServerException('Internal Server Error', error);
    }

    logger.info('Exit log : Executed createCustomer service successfully');

    return Promise.resolve(
      generateSuccessResponse('Customer created successfully', {
        id: customer._id,
      }),
    );
  } catch (error) {
    logger.error(`Exit log : Error occurred at createCustomer service ${error.stack || error}`);

    if (error.statusCode || error.code) {
      return Promise.reject(error);
    }

    return Promise.reject(new InternalServerException('Something went wrong', error));
  }
};

export default createCustomer;
