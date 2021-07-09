import express from 'express';
import userController from '../controllers/userController';

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
      { name: 'incorporationcertificate' },
    ]),
    userController.createAccount
  )
  .get(userController.getUsers);

export default router;
