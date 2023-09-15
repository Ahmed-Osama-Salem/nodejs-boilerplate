"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const envFound = dotenv_1.default.config();
if (envFound.error) {
    throw new Error("no .env file found");
}
exports.default = {
    dev: {
        port: parseInt(process.env.PORT, 10),
    },
};
//# sourceMappingURL=index.js.map