const mongoose = require('mongoose');

const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

console.log(process.env.Mongo_URI);

exports.connect = () => {
  mongoose
    .connect(process.env.Mongo_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log(`DB connected successfully`);
    })
    .catch((err) => {
      console.log('Db connection issue');
      console.error(err);
      process.exit(1);
    });
};
