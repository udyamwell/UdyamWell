const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

exports.connect = () => {
  const uri = process.env.MONGODB_URI;
  mongoose
    .connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log(`DB Connected Successfully`);
    })
    .catch((err) => {
      console.log('Db connection issue');
      console.error(err);
      process.exit(1);
    });
};
