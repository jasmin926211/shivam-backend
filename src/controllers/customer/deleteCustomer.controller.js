import logger from '#/logger';
import customerServices from '#/services/customer';

const deleteCustomer = (req, res, next) => {
  const {
    params: { customerId },
  } = req;
  logger.info('Entry log : Executing deleteCustomer controller');

  customerServices
    .deleteCustomer(customerId)
    .then(() => {
      logger.info('Exit log : deleteCustomer controller has been executed successfully');
      res.status(204).json();
    })
    .catch((error) => {
      logger.error(`Exit log : Error occurred at deleteCustomer controller ${error.stack || error}`);
      next(error);
    });
};

export default deleteCustomer;
