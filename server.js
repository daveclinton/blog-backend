const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const dbConnect = require("./config/db/dbConnect");

const app = express();
// DB
dbConnect();

// server
const PORT = process.env.PORT || 5000;

app.listen(PORT, 5000, console.log(`Server running on port ${PORT}`));

// MongoDB Password
// username ` dave`
// password `4uAH0ks3ScJMj3zA`
