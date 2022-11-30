import { Router } from 'express';
import * as Package from './controller';
const router = Router();

router.get('/pkg', Package.getAllPkg);
router.post('/pkg', Package.addPackage);
