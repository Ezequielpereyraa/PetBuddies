"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = __importDefault(require("./src/config/db"));
// Create a new express app instance
const index_1 = __importDefault(require("./src/routes/index"));
const app = express_1.default();
//Connect db
db_1.default();
app.use("/", index_1.default);
app.listen(process.env.PORT || 3001, function () {
    console.log("App is listening on port 3001");
});
