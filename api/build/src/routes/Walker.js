"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const User_1 = __importDefault(require("../models/User"));
const server = express_1.default.Router();
const bcrypt = require("bcrypt");
// ESTA RUTA DEVUELVE TODOS LOS PASEADORES 
server.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const walkers = yield User_1.default.find({ role: "Walker" });
        res.send(walkers);
    }
    catch (err) {
        res.send(err);
    }
}));
// ESTA RUTA DEVUELVE LOS DATOS DE UN PASEADOR EN ESPECIFICO
server.get("/:walkerId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { walkerId } = req.params;
    try {
        const walker = yield User_1.default.findById(walkerId).select(["-role", "-favorites", "-date", "-password"]);
        res.send(walker);
    }
    catch (err) {
        res.send(err);
    }
}));
// ESTA RUTA DEVUELVE PASEADORES POR ZONA
server.get("/zone/:zone", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const zone = req.params.zone;
    try {
        const walkers = yield User_1.default.find({ role: "Walker" }).select(["-role", "-favorites", "-date", "-password"]);
        var filteredWalkers = walkers.filter((walker) => walker.workZone.includes(zone));
        res.send(filteredWalkers);
    }
    catch (err) {
        res.send(err);
    }
}));
// ESTA RUTA ES PARA REGISTRO DE UN WALKER 
// A LA HORA DE AGREGAR NUEVOS USUARIOS VERIFICAR LA RESPUESTA AL TENER EMAIL DUPLICADO
server.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { password } = req.body;
    try {
        const pass = bcrypt.hashSync(password, 10);
        const walker = yield User_1.default.create(req.body);
        walker.role = "Walker";
        walker.password = pass;
        yield walker.save();
        res.send(walker);
    }
    catch (err) {
        res.json(err);
    }
}));
// ESTA RUTA ES PARA EDITAR LOS DATOS DE UN PASEADOR
server.put("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const walker = yield User_1.default.findByIdAndUpdate({ _id: id }, req.body, {
            new: true,
        });
        res.send(walker);
    }
    catch (err) {
        res.send(err);
    }
}));
exports.default = server;
