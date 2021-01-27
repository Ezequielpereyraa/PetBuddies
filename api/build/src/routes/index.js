"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const morgan_1 = __importDefault(require("morgan"));
const express_1 = __importDefault(require("express"));
const owner_1 = __importDefault(require("./owner"));
const Walker_1 = __importDefault(require("./Walker"));
const petRoute_1 = __importDefault(require("./petRoute"));
const app = express_1.default.Router();
app.use(express_1.default.json()); // Body Parser
app.use(morgan_1.default("dev"));
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Methods", "GET, PUT, DELETE, POST, PATCH"); // ESTO PERMITE HACER ESTE TIPO DE PETICIONES
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization  ");
    next();
});
app.use("/owners", owner_1.default);
app.use("/walkers", Walker_1.default);
app.use("/pets", petRoute_1.default);
exports.default = app;
