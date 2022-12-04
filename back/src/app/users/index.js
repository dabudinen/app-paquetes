import { Router } from 'express';
import * as Users from './controller';

const router = Router();

router.post('/login', Users.userLogin);
router.post('/add', Users.addUser);
router.get('/auth', Users.authUser);
router.get('/close', Users.closeSession);

module.exports = router;
