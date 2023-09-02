import Customer from 'models/Customer';

import logger from '#/logger';
import { customerExists } from '#/services/common';
import { InternalServerException } from '#/utilities/exceptions';
import handleAsync from '#/utilities/handleAsync';

const deleteCustomer = async (customerId) => {
  try {
    logger.info('Entry log : Executing deleteCustomer service');

    await customerExists(customerId);

    const [_, error] = await handleAsync(Customer.findByIdAndDelete(customerId));

    if (error) {
      throw new InternalServerException('Internal Server Error', error);
    }

    logger.info('Exit log : Executed deleteCustomer service successfully');

    return Promise.resolve();
  } catch (error) {
    logger.error(`Exit log : Error occurred at deleteCustomer service ${error.stack || error}`);

    if (error.statusCode || error.code) {
      return Promise.reject(error);
    }

    return Promise.reject(new InternalServerException('Something went wrong', error));
  }
};

export default deleteCustomer;
