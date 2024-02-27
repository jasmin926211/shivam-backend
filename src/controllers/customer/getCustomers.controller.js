import logger from '#/logger';
import customerServices from '#/services/customer';

const getCustomers = (req, res, next) => {
  logger.info('Entry log : Executing getCustomers controller');

  customerServices
    .getCustomers()
    .then((response) => {
      logger.info('Exit log : getCustomers controller has been executed successfully');
      res.status(200).json(response);
    })
    .catch((error) => {
      logger.error(`Exit log : Error occurred at getCustomers controller ${error.stack || error}`);
      next(error);
    });
};

export default getCustomers;
