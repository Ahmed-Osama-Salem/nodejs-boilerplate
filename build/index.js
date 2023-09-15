"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const test_1 = require("./src/routes/test");
const app = (0, express_1.default)();
app.use(test_1.testRouter);
app.listen(8000 || process.env.PORT, () => {
    console.log("Server is running on port" + 8000 || process.env.PORT);
});
//# sourceMappingURL=index.js.map