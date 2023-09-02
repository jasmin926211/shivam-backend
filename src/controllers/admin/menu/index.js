import express from 'express';

import { authenticateToken } from '#/middlewares';

import createMenuItems from './createMenuItems.controller';
import getMenuItems from './getMenuItems.controller';

const router = express.Router();

router.route('/').post(authenticateToken, createMenuItems);
router.route('/:categoryId').get(authenticateToken, getMenuItems);

export default router;
