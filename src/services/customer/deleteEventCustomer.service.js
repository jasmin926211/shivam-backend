import Customer from 'models/Customer';

import logger from '#/logger';
import { InternalServerException, ResourceNotFoundException } from '#/utilities/exceptions';

const deleteEventCustomer = async (customerId, eventId) => {
  try {
    logger.info('Entry log : Executing deleteEventCustomer service');

    const customer = await Customer.findById(customerId);

    if (!customer) {
      return Promise.reject(new ResourceNotFoundException('Customer not found'));
    }

    // Find the specific event in the customer's events array
    const eventIndex = customer.events.findIndex((event) => event._id.equals(eventId));

    if (eventIndex === -1) {
      return Promise.reject(new ResourceNotFoundException('Event not found for the customer'));
    }

    // Remove the event from the events array
    customer.events.splice(eventIndex, 1);

    await customer.save();
    logger.info('Exit log : Executed deleteEventCustomer service successfully');

    return Promise.resolve();
  } catch (error) {
    logger.error(`Exit log : Error occurred at deleteEventCustomer service ${error.stack || error}`);

    if (error.statusCode || error.code) {
      return Promise.reject(error);
    }

    return Promise.reject(new InternalServerException('Something went wrong', error));
  }
};

export default deleteEventCustomer;
