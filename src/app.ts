import express from "express";
import config from "./config";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.listen(config.dev.port, () => {
  console.log("Server is running on port" + config.dev.port);
});
