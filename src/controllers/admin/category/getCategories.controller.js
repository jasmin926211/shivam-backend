import logger from '#/logger';
import adminCategoryServices from '#/services/admin/category';

const getCategories = (req, res, next) => {
  logger.info('Entry log : Executing getCategories controller');

  adminCategoryServices
    .getCategories()
    .then((response) => {
      logger.info('Exit log : getCategories controller has been executed successfully');
      res.status(200).json(response);
    })
    .catch((error) => {
      logger.error(`Exit log : Error occurred at getCategories controller ${error.stack || error}`);
      next(error);
    });
};

export default getCategories;
