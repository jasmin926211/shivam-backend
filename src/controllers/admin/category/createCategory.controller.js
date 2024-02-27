import logger from '#/logger';
import adminCategoryServices from '#/services/admin/category';

const createCategory = (req, res, next) => {
  const { body } = req;
  logger.info('Entry log : Executing createCategory controller');

  adminCategoryServices
    .createCategory(body)
    .then((response) => {
      logger.info('Exit log : createCategory controller has been executed successfully');
      res.status(201).json(response);
    })
    .catch((error) => {
      logger.error(`Exit log : Error occurred at createCategory controller ${error.stack || error}`);
      next(error);
    });
};

export default createCategory;
