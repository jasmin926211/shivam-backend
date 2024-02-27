import logger from '#/logger';
import adminEventServices from '#/services/admin/event';

const getEvents = (req, res, next) => {
  logger.info('Entry log : Executing getEvents controller');

  adminEventServices
    .getEvents()
    .then((response) => {
      logger.info('Exit log : getEvents controller has been executed successfully');
      res.status(200).json(response);
    })
    .catch((error) => {
      logger.error(`Exit log : Error occurred at getEvents controller ${error.stack || error}`);
      next(error);
    });
};

export default getEvents;
