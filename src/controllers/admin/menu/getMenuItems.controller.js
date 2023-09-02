import logger from '#/logger';
import adminMenuServices from '#/services/admin/menu';

const getMenuItems = (req, res, next) => {
  logger.info('Entry log : Executing getMenuItems controller');
  const {
    params: { categoryId },
    query,
  } = req;
  adminMenuServices
    .getMenuItems(categoryId, query)
    .then((response) => {
      logger.info('Exit log : getMenuItems controller has been executed successfully');
      res.status(200).json(response);
    })
    .catch((error) => {
      logger.error(`Exit log : Error occurred at getMenuItems controller ${error.stack || error}`);
      next(error);
    });
};

export default getMenuItems;
