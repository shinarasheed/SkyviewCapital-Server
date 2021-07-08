import express from 'express';
import registerController from '../controllers/registerController';

import { upload } from '../utils/cloudinary';

const router = express.Router();

router
  .route('/')
  .post(
    upload.fields([
      { name: 'identitycard' },
      { name: 'passport' },
      { name: 'signature' },
      { name: 'utilitybill' },
      { name: 'bankstatement' },
    ]),
    registerController.createAccount
  );

export default router;
