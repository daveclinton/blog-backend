const mongoose = require("mongoose");

// create schema

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "First name is required"],
  },
  lastName: {
    type: String,
    required: [true, "Last name is required"],
  },
  profilePhoto: {
    type: String,
    default:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
  },
  email: {
    type: String,
    required: [true, "Email is required"],
  },
  bio: { type: String },
  password: { type: String, required: [true, "Password is required"] },
  postCount: { type: Number, default: 0 },
});
