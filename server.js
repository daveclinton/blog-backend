const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const dbConnect = require("./config/db/dbConnect");
const userRoutes = require("./route/users/usersRoutes");

const app = express();
// DB
dbConnect();

// Middleware
app.use(express.json());

// custom middleware
const logger = (req, res, next) => {
  console.log("Am a logger");
  next();
};

// Usage

app.use(logger);
// Users Route
app.use("/api/users", userRoutes);

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
