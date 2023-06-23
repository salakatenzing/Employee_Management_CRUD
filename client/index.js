const express = require("express");
const path = require("path");
// const cors = require("cors");

const app = express();
require("dotenv").config();
const port = process.env.PORT;
// app.use(cors());
// Serve static files from the public directory
app.use(express.static(path.join(__dirname, "public")));

// Route all requests to index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
