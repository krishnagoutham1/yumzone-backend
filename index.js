const express = require("express");

const app = express();

app.get("/", (req, res) => res.send("Welcome to YumZone"));

app.listen(8000, () => {
  console.log("port running on 8000");
});
