import express from 'express';

import admin from './admin';
import customer from './customer';

const router = express.Router();

router.use('/admin', admin);

router.use('/customers', customer);

export default router;
