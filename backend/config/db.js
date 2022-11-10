const mongoose = require('mongoose')
require('dotenv').config()
const dbUrl = process.env.DB_URL || "mongodb://localhost:27017/loan_management_system"

module.exports.connect = () => {
  mongoose.connect(
    dbUrl,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (err, done) => {
      if (err) throw err;
      console.log(`Mongodb connected successfully`);
    }
  );
};