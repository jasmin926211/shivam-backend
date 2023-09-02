import express from 'express';

import { authenticateToken } from '#/middlewares';

import createEvent from './createEvent.controller';
import getEvents from './getEvents.controller';

const router = express.Router();

router.route('/').post(authenticateToken, createEvent);
router.route('/').get(authenticateToken, getEvents);

export default router;
