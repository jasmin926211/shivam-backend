import express from 'express';

import { authenticateToken } from '#/middlewares';

import addEventCustomer from './addEventCustomer.controller';
import addMenuItemCustomer from './addMenuItemCustomer.controller';
import createCustomer from './createCustomer.controller';
import deleteCustomer from './deleteCustomer.controller';
import deleteEventCustomer from './deleteEventCustomer.controller';
import getCustomer from './getCustomer.controller';
import getCustomers from './getCustomers.controller';
import updateCustomer from './updateCustomer.controller';

const router = express.Router();

router.route('/').post(authenticateToken, createCustomer);
router.route('/:customerId').get(authenticateToken, getCustomer);
router.route('/:customerId').put(authenticateToken, updateCustomer);
router.route('/:customerId').delete(authenticateToken, deleteCustomer);
router.route('/').get(authenticateToken, getCustomers);

router.route('/:customerId/events').post(authenticateToken, addEventCustomer);
router.route('/:customerId/events/:eventId').delete(authenticateToken, deleteEventCustomer);

router.route('/:customerId/events/:eventId/menus').post(authenticateToken, addMenuItemCustomer);

export default router;
