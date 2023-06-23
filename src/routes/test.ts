import express from "express";
import { handleTest } from "../controllers/test";

const testRouter = express.Router();

testRouter.get("/", handleTest);

export { testRouter };
