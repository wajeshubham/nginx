const express = require("express");

const app = express();

app.get("/", (req, res) => {
  console.log("Check terminal for a log");
  res.send("I am an endpoint");
});

app.listen(8000, () => {
  console.log("server is up on 8000");
});
