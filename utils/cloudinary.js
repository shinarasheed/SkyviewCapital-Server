import path from 'path';
import dotenv from 'dotenv';
import cloudinary from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import multer from 'multer';

dotenv.config();

const cloud = cloudinary.v2;

cloud.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary: cloud,
  params: {
    folder: 'skyview_capital',
    // transformation: 'media_lib_thumb', // the name you saved in transformation presets
    public_id: (req, file) =>
      `${file.originalname.split('.')[0]}-${Date.now()}`,
  },
});

// function checkFileType(file, cb) {
//   const filetypes = /jpg|jpeg|png/;
//   const extname = filetypes.test(
//     path.extname(file.originalname).toLocaleLowerCase()
//   );
//   const mimetype = filetypes.test(file.mimetype);
//   if (extname && mimetype) {
//     return cb(null, true);
//   } else {
//     cb(null, false);
//   }
// }

const upload = multer({
  storage,
  // fileFilter: function (req, file, cb) {
  //   checkFileType(file, cb);
  // },
});

export { upload };
