const express = require("express");
// server
const app = express();

const PORT = process.env.PORT || 5000;

app.listen(PORT, 5000, console.log(`Server listening on port ${PORT}`));
