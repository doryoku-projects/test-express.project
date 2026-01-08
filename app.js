const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("🚀 First deployment working");
});

module.exports = app;
