import { Router } from 'express';
import productRoutes from './productRoutes';
import authRoutes from './authRoutes';

const router = Router();

router.use('/auth', authRoutes);
router.use('/products', productRoutes);

export default router;
