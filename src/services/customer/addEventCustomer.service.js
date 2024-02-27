import Customer from 'models/Customer';

import logger from '#/logger';
import { InternalServerException, ResourceNotFoundException } from '#/utilities/exceptions';
import generateSuccessResponse from '#/utilities/generateResponse';

const addEventCustomer = async (customerId, requestBody) => {
  try {
    logger.info('Entry log : Executing addEventCustomer service');

    const customer = await Customer.findById(customerId);

    if (!customer) {
      return Promise.reject(new ResourceNotFoundException('Customer not found'));
    }

    const isEventExists = customer.events.some((existingEvent) => existingEvent.eventId.equals(requestBody.eventId));

    if (!isEventExists) {
      customer.events.push(requestBody);
    }

    await customer.save();
    logger.info('Exit log : Executed addEventCustomer service successfully');

    return Promise.resolve(
      generateSuccessResponse('Event created successfully', {
        id: customer._id,
      }),
    );
  } catch (error) {
    logger.error(`Exit log : Error occurred at addEventCustomer service ${error.stack || error}`);

    if (error.statusCode || error.code) {
      return Promise.reject(error);
    }

    return Promise.reject(new InternalServerException('Something went wrong', error));
  }
};

export default addEventCustomer;
