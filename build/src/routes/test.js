"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.testRouter = void 0;
const express_1 = __importDefault(require("express"));
const test_1 = require("../controllers/test");
const testRouter = express_1.default.Router();
exports.testRouter = testRouter;
testRouter.get("/", test_1.handleTest);
testRouter.get("/check", (req, res) => {
    res.send("working");
});
//# sourceMappingURL=test.js.map