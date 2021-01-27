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
const Pet_1 = __importDefault(require("../models/Pet"));
const server = express_1.default.Router();
// Tener previamente el ID del OWNER 
// ESTA RUTA AGREGA UNA MASCOTA A UN OWNER
server.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const pet = yield Pet_1.default.create(req.body);
        yield pet.save();
        res.send(pet);
    }
    catch (error) {
        res.json(error);
    }
}));
// ESTA RUTA DEVUELVE TODAS LAS MASCOTAS 
server.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const pets = yield Pet_1.default.find();
        res.send(pets);
    }
    catch (error) {
        res.send('No encontró');
    }
}));
// ESTA RUTA DEVUELVE UNA MASCOTA SEGUN SU ID
server.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const pet = yield Pet_1.default.findById(req.params.id);
        res.send(pet);
    }
    catch (error) {
        res.send('no anduvo');
    }
}));
exports.default = server;
