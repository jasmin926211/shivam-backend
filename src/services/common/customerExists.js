import Customer from 'models/Customer';
import { InternalServerException, ResourceNotFoundException } from 'utilities/exceptions';

import logger from '#/logger';

const customerExists = async (customerId) => {
  try {
    logger.info('Entry log : Executing customerExists helper');

    const customer = await Customer.findOne({ _id: customerId });

    if (!customer) {
      return Promise.reject(new ResourceNotFoundException('Customer not found'));
    }

    logger.info('Exit log : Executed customerExists helper successfully');

    return Promise.resolve(customer);
  } catch (error) {
    logger.error(`Exit log : Error occurred at customerExists helper ${error.stack || error}`);

    return Promise.reject(new InternalServerException('Internal Server Error', error));
  }
};

export default customerExists;
