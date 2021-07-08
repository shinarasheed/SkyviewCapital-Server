import express from 'express';

import registerRoutes from './userRoutes';

const router = express.Router();

router.use('/users', registerRoutes);

export default router;
