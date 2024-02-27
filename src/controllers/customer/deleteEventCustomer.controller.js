import logger from '#/logger';
import customerServices from '#/services/customer';

const deleteEventCustomer = (req, res, next) => {
  const {
    params: { customerId, eventId },
  } = req;
  logger.info('Entry log : Executing deleteEventCustomer controller');

  customerServices
    .deleteEventCustomer(customerId, eventId)
    .then(() => {
      logger.info('Exit log : deleteEventCustomer controller has been executed successfully');
      res.status(204).json();
    })
    .catch((error) => {
      logger.error(`Exit log : Error occurred at deleteEventCustomer controller ${error.stack || error}`);
      next(error);
    });
};

export default deleteEventCustomer;
