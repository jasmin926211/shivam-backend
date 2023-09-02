import Customer from 'models/Customer';
import Menu from 'models/Menu';

import logger from '#/logger';
import { customerExists } from '#/services/common';
import { InternalServerException, ResourceNotFoundException } from '#/utilities/exceptions';
import handleAsync from '#/utilities/handleAsync';

const getCustomer = async (customerId) => {
  try {
    logger.info('Entry log : Executing getCustomer service');

    await customerExists(customerId);

    const [customer, error] = await handleAsync(
      Customer.findOne({ _id: customerId }, { __v: 0 }).populate({
        path: 'events.eventId',
        select: '_id eventType eventDate',
      }),
    );

    const populatedEvents = await Promise.all(
      customer.events.map(async (event) => {
        const selectedMenuItems = await Menu.find(
          { _id: { $in: event.selectedMenuItems } },
          '_id category name gujaratiName image',
        );

        return {
          _id: event._id,
          eventTypeId: event.eventId._id,
          eventType: event.eventId.eventType,
          eventDate: event.eventDate,
          selectedMenuItems,
        };
      }),
    );

    if (error) {
      throw new InternalServerException('Internal Server Error', error);
    }

    if (!customer) {
      throw new ResourceNotFoundException('Customer not found');
    }
    logger.info('Exit log : Executed getCustomer service successfully');

    return Promise.resolve({
      _id: customer._id,
      userName: `${customer.firstName} ${customer.lastName}`,
      firstName: customer.firstName,
      lastName: customer.lastName,
      phoneDialCode: customer.phoneDialCode,
      phoneNumber: customer.phoneNumber,
      mobileNumber: `${customer.phoneDialCode} ${customer.phoneNumber}`,
      email: customer.email,
      eventAddress: customer.eventAddress,
      eventStartDate: customer.eventStartDate,
      eventEndDate: customer.eventEndDate,
      events: populatedEvents,
    });
  } catch (error) {
    logger.error(`Exit log : Error occurred at getCustomer service ${error.stack || error}`);

    if (error.statusCode || error.code) {
      return Promise.reject(error);
    }

    return Promise.reject(new InternalServerException('Something went wrong', error));
  }
};

export default getCustomer;

// const [customer, error] = await handleAsync(
//   await Customer.findById(customerId).populate({
//     path: 'events.eventId',
//     select: '_id eventType eventDate',
//     populate: {
//       path: 'selectedMenuItems',
//       select: '_id category name gujaratiName image',
//     },
//   }),
// );
