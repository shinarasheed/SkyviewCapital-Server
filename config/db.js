import mongoose from 'mongoose';

async function connectDb() {
  try {
    const conn = await mongoose.connect(
      process.env.NODE_ENV === 'production'
        ? 'mongodb+srv://rasheedopeyemi:opeyemi22@@cluster0.9m6fq.mongodb.net/skyviewcapital?retryWrites=true&w=majority'
        : 'mongodb://localhost:27017/skyviewcapital',
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
