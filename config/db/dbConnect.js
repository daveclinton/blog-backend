const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://david:4uAH0ks3ScJMj3zA@cluster0.yaqvbaw.mongodb.net/?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("Db is connected successfully");
  } catch (error) {
    console.log(`Error, ${error.message}`);
  }
};

module.exports = dbConnect;
