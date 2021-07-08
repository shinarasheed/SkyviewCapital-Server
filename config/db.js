import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectionString =
  process.env.NODE_ENV === 'development'
    ? process.env.MONGO_URI_DEV
    : process.env.MONGO_URI_PROD;

async function connectDb() {
  try {
    const conn = await mongoose.connect(
      'mongodb+srv://rasheedopeyemi:opeyemi22@@cluster0.9m6fq.mongodb.net/skyviewcapital?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
      }
    );
    console.log(`Mongodb connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.log(`Error: ${error.message}`.red.underline.bold);
    process.exit(1);
  }
}

export default connectDb;
