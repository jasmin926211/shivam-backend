import logger from '#/logger';
import adminMenuServices from '#/services/admin/menu';

const createMenuItems = (req, res, next) => {
  const { body } = req;
  logger.info('Entry log : Executing createMenuItems controller');

  adminMenuServices
    .createMenuItems(body)
    .then((response) => {
      logger.info('Exit log : createMenuItems controller has been executed successfully');
      res.status(201).json(response);
    })
    .catch((error) => {
      logger.error(`Exit log : Error occurred at createMenuItems controller ${error.stack || error}`);
      next(error);
    });
};

export default createMenuItems;
