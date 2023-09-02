import Customer from 'models/Customer';

import logger from '#/logger';
import { InternalServerException } from '#/utilities/exceptions';
import handleAsync from '#/utilities/handleAsync';

const getCustomers = async () => {
  try {
    logger.info('Entry log : Executing getCustomers service');

    const [customers, error] = await handleAsync(Customer.find());

    if (error) {
      throw new InternalServerException('Internal Server Error', error);
    }

    logger.info('Exit log : Executed getCustomers service successfully');

    return Promise.resolve(customers);
  } catch (error) {
    logger.error(`Exit log : Error occurred at getCustomers service ${error.stack || error}`);

    if (error.statusCode || error.code) {
      return Promise.reject(error);
    }

    return Promise.reject(new InternalServerException('Something went wrong', error));
  }
};

export default getCustomers;
