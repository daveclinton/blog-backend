const User = require("../../models/user/User");

// Register a new user

const userRegisterController = async (req, res) => {
  try {
    // business logic
    const user = await User.create({
      firstName: "David",
      lastName: "Clinton",
      email: "david@example.com",
      password: "123456789",
    });
    res.json(user);
  } catch (error) {
    res.json({ message: "An error occurred while registering the user" });
  }
};

module.exports = { userRegisterController };
