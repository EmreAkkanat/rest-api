const mongoose = require("mongoose");

const db = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("mongoDB conecttttt");
    })
    .catch((err) => {
      // throw new Error(error.message)
      console.log(err);
    });
};

module.exports = db;
