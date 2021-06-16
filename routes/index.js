import express from 'express';

import userRoutes from './productRoutes';

const router = express.Router();

router.use('/users', userRoutes);

export default router;
