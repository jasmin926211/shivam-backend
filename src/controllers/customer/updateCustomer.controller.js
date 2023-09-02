import logger from '#/logger';
import customerServices from '#/services/customer';

const updateCustomer = (req, res, next) => {
  const {
    body,
    params: { customerId },
  } = req;
  logger.info('Entry log : Executing updateCustomer controller');

  customerServices
    .updateCustomer(customerId, body)
    .then(() => {
      logger.info('Exit log : updateCustomer controller has been executed successfully');
      res.status(204).json();
    })
    .catch((error) => {
      logger.error(`Exit log : Error occurred at updateCustomer controller ${error.stack || error}`);
      next(error);
    });
};

export default updateCustomer;
