import express from "express";
import config from "./src/config";
import { testRouter } from "./src/routes/test";

const app = express();

app.use(testRouter);

app.listen(8000 || process.env.PORT, () => {
  console.log("Server is running on port" + 8000 || process.env.PORT);
});
