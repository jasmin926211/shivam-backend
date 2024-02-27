import logger from '#/logger';
import adminAuthServices from '#/services/admin/auth';

const createAdmin = (req, res, next) => {
  const { body } = req;
  logger.info('Entry log : Executing createAdmin controller');

  adminAuthServices
    .createAdmin(body)
    .then((response) => {
      logger.info('Exit log : createAdmin controller has been executed successfully');
      res.status(201).json(response);
    })
    .catch((error) => {
      logger.error(`Exit log : Error occurred at createAdmin controller ${error.stack || error}`);
      next(error);
    });
};

export default createAdmin;
