import express from "express";
import User from "../models/User";
import Pet from "../models/Pet";
import { ownerIt } from "./types";
const bcrypt = require("bcrypt");
const server = express.Router();

// Trae solo Owner's
server.get("/", async (req, res) => {
  try {
    const owners = await User.find({ role: "Owner" }) //.select("-favorites"); POSIBLE MEJORA
    res.send(owners);
  } catch (err) {
    res.send(err);
  }
});

// Trae tanto al USER como a sus respectivas PET's
server.get("/:id", async (req, res) => {
  try {
    const owner = await User.findById(req.params.id).select(["-favorites", "-CUIT", "-workHours", "-workZone", "-description", "-date", "-fee", "-role", "-rating"]);
    const pets = await Pet.find({ ownerId: req.params.id });
    res.send({ owner, pets });
  } catch (error) {
    res.send(error);
  }
});

// Esta ruta es para el registro de usuario
// A LA HORA DE AGREGAR NUEVOS USUARIOS VERIFICAR LA RESPUESTA AL TENER EMAIL DUPLICADO
server.post("/", async (req, res) => {
  try {
    const owner: any = await User.create(req.body); //pasan los del registro (Name, lastName, password, email, zona)
    await owner.save();
    res.send(owner);
  } catch (err) {
    res.json(err);
  }
});

// Esta ruta es para editar a un usuario 
server.put("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const owner = await User.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
    });

    res.send(owner);
  } catch (err) {
    res.send(err);
  }
});

// Esta ruta trae los paseadores favoritos de un usuario 
server.get ("/:id/favorites", async (req, res) => {
  const { id } = req.params;
  try {
    const owner = await User.findById (id).select ("favorites");
    res.send (owner);
  } catch (err) {
    console.log (err);
  }
})

// Esta ruta es para agregar walkers como favoritos a un usuario especifico por su id
server.patch("/:id/favorites", async (req, res) => {
  const { id } = req.params;
  const { walkerId } = req.body;
  try {
    const walker = await User.findById(walkerId);
    const owner = await User.findById(id);
    let confirm:any = owner?.favorites.find((walker:any) => walker._id === walkerId)
    if(!confirm){
      owner.favorites = [...owner.favorites, walker];
      await owner.save();
     return res.send(owner);

    }else{
      res.send({msg:'Este paseador ya esta en tus favoritos!'})
    }
  } catch (err) {
    console.log(err);
  }
});

// Esta ruta remueve un paseador favorito del usuario 
server.delete("/:userId/favorites/:walkerId", async (req, res) => {
  const { userId, walkerId } = req.params;

  try {
    const owner = await User.findById(userId);
    owner.favorites = owner.favorites.filter(
      (fav: { _id: string }) => String(fav._id) !== walkerId
    );
    await owner.save();
    res.send(owner);
  } catch (err) {
    res.send(err);
  }
});

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

export default server;
