import { Router } from 'express';
import * as Users from './controller';
const router = Router();

router.post('/login', Users.login);
router.post('/add', Users.addUser);
router.delete('/del', Users.delUser);
router.put('/update', Users.updateUser);

module.exports = router;
