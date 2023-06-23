import express from "express";
import config from "./config";
import { testRouter } from "./routes/test";

const app = express();

app.use(testRouter);

app.listen(config.dev.port, () => {
  console.log("Server is running on port" + config.dev.port);
});
