import Customer from 'models/Customer';

import logger from '#/logger';
import { InternalServerException, ResourceNotFoundException } from '#/utilities/exceptions';

const addMenuItemCustomer = async (customerId, eventId, requestBody) => {
  try {
    logger.info('Entry log : Executing addMenuItemCustomer service');

    const { menuItemId, isSelected } = requestBody;

    const customer = await Customer.findById(customerId);

    if (!customer) {
      return Promise.reject(new ResourceNotFoundException('Customer not found'));
    }

    const eventIndex = customer.events.findIndex((event) => event._id.equals(eventId));

    if (eventIndex === -1) {
      return Promise.reject(new ResourceNotFoundException('Event not found for the customer'));
    }

    // If the menuItemId is in the selectedMenuItems array and isSelected is false, remove it
    const { selectedMenuItems } = customer.events[eventIndex];
    const menuItemIndex = selectedMenuItems.indexOf(menuItemId);

    if (menuItemIndex !== -1 && !isSelected) {
      selectedMenuItems.splice(menuItemIndex, 1);
    }

    // If the menuItemId is not in the selectedMenuItems array and isSelected is true, add it
    if (menuItemIndex === -1 && isSelected) {
      selectedMenuItems.push(menuItemId);
    }

    await customer.save();
    logger.info('Exit log : Executed addMenuItemCustomer service successfully');

    return Promise.resolve();
  } catch (error) {
    logger.error(`Exit log : Error occurred at addMenuItemCustomer service ${error.stack || error}`);

    if (error.statusCode || error.code) {
      return Promise.reject(error);
    }

    return Promise.reject(new InternalServerException('Something went wrong', error));
  }
};

export default addMenuItemCustomer;
