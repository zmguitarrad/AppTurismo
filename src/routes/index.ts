import { Router } from 'express';
const router = Router();

import { getHistory,createHistory } from '../controllers/index.controller';
import { getTouristAttraction, createTouristAttraction } from '../controllers/categoria.controller';

router.get('/tourist',getTouristAttraction);;
router.post('/tourist',createTouristAttraction);

router.get('/history',getHistory);;
router.post('/history',createHistory);



export default router;