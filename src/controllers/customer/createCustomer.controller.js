import logger from '#/logger';
import customerServices from '#/services/customer';

const createCustomer = (req, res, next) => {
  const { body } = req;
  logger.info('Entry log : Executing createCustomer controller');

  customerServices
    .createCustomer(body)
    .then((response) => {
      logger.info('Exit log : createCustomer controller has been executed successfully');
      res.status(201).json(response);
    })
    .catch((error) => {
      logger.error(`Exit log : Error occurred at createCustomer controller ${error.stack || error}`);
      next(error);
    });
};

export default createCustomer;
