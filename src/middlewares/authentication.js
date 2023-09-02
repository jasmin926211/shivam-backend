import config from 'config';
import jwt from 'jsonwebtoken';

import { BadRequestException, UnauthorizedException } from '#/utilities/exceptions';

const authenticateToken = (req, res, next) => {
  const token = req.headers.authorization;

  if (token == null) throw new BadRequestException('Please provide token');
  try {
    const user = jwt.verify(token, config.get('tokenSecretKey'));

    if (Date.now() > user.exp * 1000) {
      throw new UnauthorizedException('Token Expired');
    }

    req.headers = {
      ...req.headers,
      userId: user.id,
    };
    next();
  } catch (err) {
    throw new UnauthorizedException(err);
  }
};

export default authenticateToken;
