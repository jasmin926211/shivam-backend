import express from 'express';

import { authenticateToken } from '#/middlewares';

import createAdmin from './createAdmin.controller';
import getAdmin from './getAdmin.controller';
import login from './login.controller';

const router = express.Router();

router.route('/register').post(createAdmin);
router.route('/login').post(login);
router.route('/').get(authenticateToken, getAdmin);

export default router;
