import logger from '#/logger';
import adminAuthServices from '#/services/admin/auth';

const getAdmin = (req, res, next) => {
  const {
    headers: { userId },
  } = req;
  logger.info('Entry log : Executing getAdmin controller');

  adminAuthServices
    .getAdmin(userId)
    .then((response) => {
      logger.info('Exit log : getAdmin controller has been executed successfully');
      res.status(201).json(response);
    })
    .catch((error) => {
      logger.error(`Exit log : Error occurred at getAdmin controller ${error.stack || error}`);
      next(error);
    });
};

export default getAdmin;
