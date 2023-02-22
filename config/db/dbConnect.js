const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    await mongoose.connect("Connection string", {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: true,
    });
    console.log("Connected to mongo");
  } catch (error) {
    console.log(`Error, ${error.message}`);
  }
};

module.exports = dbConnect;
