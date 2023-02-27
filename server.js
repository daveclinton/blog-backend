const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const dbConnect = require("./config/db/dbConnect");
const { userRegisterController } = require("./controllers/user/userController");

const app = express();
// DB
dbConnect();

// Middleware
app.use(express.json());

// Register
app.post("/api/users/register", userRegisterController);

// Login
app.post("/api/users/login", (req, res) => {
  // bussiness logic
  res.json({ user: "User Logged On" });
});

// fetch all users
app.get("/api/users", (req, res) => {
  // bussiness logic
  res.json({ user: "Fetch all users" });
});

// server
const PORT = process.env.PORT || 5000;

app.listen(PORT, 5000, console.log(`Server running on port ${PORT}`));

// MongoDB Password
// username ` dave`
// password `4uAH0ks3ScJMj3zA`
