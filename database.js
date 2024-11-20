const mongoose = require("mongoose");

const connectDB = async () => {
  const conn = await mongoose.connect(
    "mongodb+srv://wahababdal:55055144@cluster0.6xulh.mongodb.net/"
  );
  console.log(`mongo connected: ${conn.connection.host}`);
};

module.exports = connectDB;
