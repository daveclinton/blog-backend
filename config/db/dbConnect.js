const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONDODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Db is connected successfully");
  } catch (error) {
    console.log(`Error, ${error.message}`);
  }
};

module.exports = dbConnect;
