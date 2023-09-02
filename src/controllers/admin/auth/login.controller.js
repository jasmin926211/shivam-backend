import logger from '#/logger';
import adminLoginServices from '#/services/admin/auth';

const login = (req, res, next) => {
  const { body } = req;
  logger.info('Entry log : Executing login controller');

  adminLoginServices
    .login(body)
    .then((response) => {
      logger.info('Exit log : login controller has been executed successfully');
      res.status(200).json(response);
    })
    .catch((error) => {
      logger.error(`Exit log : Error occurred at login controller ${error.stack || error}`);
      next(error);
    });
};

export default login;
