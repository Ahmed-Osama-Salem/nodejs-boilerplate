import express from "express";
import { handleTest } from "../controllers/test";

const testRouter = express.Router();

testRouter.get("/", handleTest);
testRouter.get("/check", (req, res) => {
  res.send("working");
});

export { testRouter };
