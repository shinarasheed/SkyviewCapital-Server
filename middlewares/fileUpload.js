import { upload } from '../utils/cloudinary';

export const uploadFiles = async (req, res, next) => {
  const uploadResponse = upload.single('photoPassport');
  console.log(uploadResponse);
  next();
};
