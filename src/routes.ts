import { Router } from 'express';
import { AuthenticateUserController } from './controllers/AuthenticateUserController';
import { CreateComplimentController } from './controllers/CreateComplimentController';
import { CreateTagController } from './controllers/CreateTagController';
import { CreateUserController } from './controllers/CreateUserController';
import { ListTagsController } from './controllers/ListTagsController';
import { ListUserController } from './controllers/ListUserController';
import { ListUserReceiverComplimentController } from './controllers/ListUserReceiverComplimentController';
import { ListUserSenderComplimentController } from './controllers/ListUserSenderComplimentContoller';
import { ensureAdmin } from './middlewares/ensureAdmin';
import { ensureAuthenticated } from './middlewares/ensureAuthenticated';

const router = Router();
const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController();
const listUserSenderComplimentController = new ListUserSenderComplimentController();
const listUserReceiverComplimentController = new ListUserReceiverComplimentController();
const listTagsController = new ListTagsController();
const listUserController = new ListUserController();

router.post('/users', createUserController.handle);
router.post('/tags', ensureAuthenticated, ensureAdmin, createTagController.handle);
router.get('/tags', ensureAuthenticated, listTagsController.handle);
router.post('/login', authenticateUserController.handle);
router.post('/compliments', ensureAuthenticated, createComplimentController.handle);
router.get('/users/compliments/send', ensureAuthenticated, listUserSenderComplimentController.handle);
router.get('/users/compliments/receive', ensureAuthenticated, listUserReceiverComplimentController.handle);
router.get('/users', ensureAuthenticated, listUserController.handle);

export { router }