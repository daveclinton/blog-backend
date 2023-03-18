const User = require("../../models/user/User");

// Register a new user
const userRegisterController = async (req, res) => {
  // Check if required fields are present in request body
  if (
    !req?.body?.firstName ||
    !req?.body?.lastName ||
    !req?.body?.email ||
    !req?.body?.password
  ) {
    return res
      .status(400)
      .json({ error: "Please provide all required fields" });
  }

  try {
    // Create a new user
    const user = await User.create({
      firstName: req?.body?.firstName,
      lastName: req?.body?.lastName,
      email: req?.body?.email,
      password: req?.body?.password,
    });

    // Send response containing the new user object
    res.json(user);
  } catch (error) {
    // If an error occurs, check if it is a validation error
    if (error.name === "ValidationError") {
      // If it is a validation error, send a 400 (Bad Request) response with the error message
      return res.status(400).json({ error: error.message });
    }

    // If it is not a validation error, send a generic error response
    res
      .status(500)
      .json({ error: "An error occurred while creating a new user" });
  }
};

module.exports = { userRegisterController };
