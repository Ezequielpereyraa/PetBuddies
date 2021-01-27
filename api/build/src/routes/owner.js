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
const Pet_1 = __importDefault(require("../models/Pet"));
const bcrypt = require("bcrypt");
const server = express_1.default.Router();
// Trae solo Owner's
server.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const owners = yield User_1.default.find({ role: "Owner" }); //.select("-favorites"); POSIBLE MEJORA
        res.send(owners);
    }
    catch (err) {
        res.send(err);
    }
}));
// Trae tanto al USER como a sus respectivas PET's
server.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const owner = yield User_1.default.findById(req.params.id).select(["-favorites", "-CUIT", "-workHours", "-workZone", "-description", "-date", "-fee", "-role", "-rating"]);
        const pets = yield Pet_1.default.find({ ownerId: req.params.id });
        res.send({ owner, pets });
    }
    catch (error) {
        res.send(error);
    }
}));
// Esta ruta es para el registro de usuario
// A LA HORA DE AGREGAR NUEVOS USUARIOS VERIFICAR LA RESPUESTA AL TENER EMAIL DUPLICADO
server.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { password } = req.body;
    try {
        const pass = bcrypt.hashSync(password, 10); // Hasheo de la contraseña
        const owner = yield User_1.default.create(req.body); //pasan los del registro (Name, lastName, password, email, zona)
        owner.password = pass;
        yield owner.save();
        // const prueba = bcrypt.compareSync(password, owner.password)
        res.send(owner);
    }
    catch (err) {
        res.json(err);
    }
}));
// Esta ruta es para editar a un usuario 
server.put("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const owner = yield User_1.default.findByIdAndUpdate({ _id: id }, req.body, {
            new: true,
        });
        res.send(owner);
    }
    catch (err) {
        res.send(err);
    }
}));
// Esta ruta trae los paseadores favoritos de un usuario 
server.get("/:id/favorites", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const owner = yield User_1.default.findById(id).select("favorites");
        res.send(owner);
    }
    catch (err) {
        console.log(err);
    }
}));
// Esta ruta es para agregar walkers como favoritos a un usuario especifico por su id
server.patch("/:id/favorites", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { walkerId } = req.body;
    try {
        const walker = yield User_1.default.findById(walkerId);
        const owner = yield User_1.default.findById(id);
        let confirm = owner === null || owner === void 0 ? void 0 : owner.favorites.find((walker) => walker._id === walkerId);
        if (!confirm) {
            owner.favorites = [...owner.favorites, walker];
            yield owner.save();
            return res.send(owner);
        }
        else {
            res.send({ msg: 'Este paseador ya esta en tus favoritos!' });
        }
    }
    catch (err) {
        console.log(err);
    }
}));
// Esta ruta remueve un paseador favorito del usuario 
server.delete("/:userId/favorites/:walkerId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId, walkerId } = req.params;
    try {
        const owner = yield User_1.default.findById(userId);
        owner.favorites = owner.favorites.filter((fav) => String(fav._id) !== walkerId);
        yield owner.save();
        res.send(owner);
    }
    catch (err) {
        res.send(err);
    }
}));
// "name": "   juan carlos    ",
// "lastname": "    del     valle ",
// "email": "javisawasss@gmail.com",
// "password": "javier",
// "cellphone": 4213213,
// "address": "jkashdajshds",
// "zona": "norte",
// "isAdmin": true,
// "dni": 12321321,
// "photo": "cualquiercosa",
exports.default = server;
