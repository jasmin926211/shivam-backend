import express from 'express';

import auth from './auth';
import category from './category';
import event from './event';
import menu from './menu';

const router = express.Router();

router.use('/auth', auth);
router.use('/events', event);
router.use('/categories', category);
router.use('/menus', menu);

export default router;
