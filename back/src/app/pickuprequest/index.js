import { Router } from 'express';
import * as Package from './controller';

const router = Router();

router.get('/all', Package.getAllPkg);
router.post('/add', Package.addPackage);
router.put('/edit', Package.editAllPkg);

module.exports = router;
