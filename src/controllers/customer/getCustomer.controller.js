import logger from '#/logger';
import customerServices from '#/services/customer';

const getCustomer = (req, res, next) => {
  const {
    params: { customerId },
  } = req;
  logger.info('Entry log : Executing getCustomer controller');

  customerServices
    .getCustomer(customerId)
    .then((response) => {
      logger.info('Exit log : getCustomer controller has been executed successfully');
      res.status(200).json(response);
    })
    .catch((error) => {
      logger.error(`Exit log : Error occurred at getCustomer controller ${error.stack || error}`);
      next(error);
    });
};

export default getCustomer;
