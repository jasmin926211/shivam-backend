import bcrypt from 'bcrypt';
import config from 'config';
import jwt from 'jsonwebtoken';

import Admin from 'models/Admin';

import logger from '#/logger';
import { TOKEN_EXPIRE_TIME } from '#/utilities/constants';
import { InternalServerException, ResourceNotFoundException, UnauthorizedException } from '#/utilities/exceptions';
import handleAsync from '#/utilities/handleAsync';

const login = async (requestBody) => {
  try {
    logger.info('Entry log : Executing admin login service');
    const { email } = requestBody;
    const [user, error] = await handleAsync(Admin.findOne({ email }));

    if (error) {
      throw new InternalServerException('Internal Server Error', error);
    }

    if (!user) {
      throw new ResourceNotFoundException('User not found. Please enter valid email', requestBody.email);
    }

    if (!bcrypt.compareSync(requestBody.password, user.password)) {
      throw new UnauthorizedException('Invalid password');
    }

    const token = jwt.sign({ id: user._id }, config.get('tokenSecretKey'), {
      expiresIn: TOKEN_EXPIRE_TIME,
    });

    logger.info('Exit log : Executed admin login service successfully');

    return Promise.resolve({
      id: user._id,
      token,
    });
  } catch (error) {
    logger.error(`Exit log : Error occurred at admin login ${error.stack || error}`);

    if (error.statusCode || error.code) {
      return Promise.reject(error);
    }

    return Promise.reject(new InternalServerException('Internal Server Error', error));
  }
};

export default login;
