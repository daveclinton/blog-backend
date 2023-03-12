const express = require("express");

const {
  userRegisterController,
} = require("../../controllers/user/userController");

const userRoutes = express.Router();

userRoutes.post("/register", userRegisterController);

module.exports = userRoutes;
