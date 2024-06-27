const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, "public")));

// Main route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// About me route
app.get("/aboutme", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "aboutme"));
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
