import express from 'express';

import { authenticateToken } from '#/middlewares';

import createCategory from './createCategory.controller';
import getCategories from './getCategories.controller';

const router = express.Router();

router.route('/').post(authenticateToken, createCategory);
router.route('/').get(authenticateToken, getCategories);

export default router;
