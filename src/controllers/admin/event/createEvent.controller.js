import logger from '#/logger';
import adminEventServices from '#/services/admin/event';

const createEvent = (req, res, next) => {
  const { body } = req;
  logger.info('Entry log : Executing createEvent controller');

  adminEventServices
    .createEvent(body)
    .then((response) => {
      logger.info('Exit log : createEvent controller has been executed successfully');
      res.status(201).json(response);
    })
    .catch((error) => {
      logger.error(`Exit log : Error occurred at createEvent controller ${error.stack || error}`);
      next(error);
    });
};

export default createEvent;
