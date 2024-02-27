import logger from '#/logger';
import customerServices from '#/services/customer';

const addEventCustomer = (req, res, next) => {
  const {
    body,
    params: { customerId },
  } = req;
  logger.info('Entry log : Executing addEventCustomer controller');

  customerServices
    .addEventCustomer(customerId, body)
    .then((response) => {
      logger.info('Exit log : addEventCustomer controller has been executed successfully');
      res.status(201).json(response);
    })
    .catch((error) => {
      logger.error(`Exit log : Error occurred at addEventCustomer controller ${error.stack || error}`);
      next(error);
    });
};

export default addEventCustomer;
