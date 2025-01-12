const express = require("express");
const rolesRoute = require("./routes/rolesRouter");
const app = express();

app.use(express.json());

app.get("/", (req, res) => res.send("Welcome to YumZone"));

app.use("/api", rolesRoute);

app.listen(8000, () => {
  console.log("port running on 8000");
});
