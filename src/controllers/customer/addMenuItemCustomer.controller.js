import logger from '#/logger';
import customerServices from '#/services/customer';

const addMenuItemCustomer = (req, res, next) => {
  const {
    params: { customerId, eventId },
    body,
  } = req;
  logger.info('Entry log : Executing addMenuItemCustomer controller');

  customerServices
    .addMenuItemCustomer(customerId, eventId, body)
    .then((response) => {
      logger.info('Exit log : addMenuItemCustomer controller has been executed successfully');
      res.status(201).json(response);
    })
    .catch((error) => {
      logger.error(`Exit log : Error occurred at addMenuItemCustomer controller ${error.stack || error}`);
      next(error);
    });
};

export default addMenuItemCustomer;
