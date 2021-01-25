import express from "express";
import User from "../models/User";
import Pet from "../models/Pet";
import { ownerIt } from "./types";
const bcrypt = require("bcrypt");
const server = express.Router();

// Trae solo USER's
server.get("/", async (req, res) => {
  try {
    const owners = await User.find({ role: "Owner" });
    res.send(owners);
  } catch (err) {
    res.send(err);
  }
});

// Trae tanto al USER como a sus respectivas PET's
server.get("/:id", async (req, res) => {
  try {
    const owner = await User.findById(req.params.id).select(["-favorites", "-CUIT", "-workHours", "-workZone", "-description", "-date", "-fee", "-role"]);
    const pets = await Pet.find({ ownerId: req.params.id });
    res.send({ owner, pets });
  } catch (error) {
    res.send(error);
  }
});

server.post("/", async (req, res) => {
  const { password } = req.body;
  try {
    const pass: string = bcrypt.hashSync(password, 10); // Hasheo de la contraseña
    const owner: any = await User.create(req.body); //pasan los del registro (Name, lastName, password, email, zona)
    owner.password = pass;
    await owner.save();
    // const prueba = bcrypt.compareSync(password, owner.password)
    res.send(owner);
  } catch (err) {
    res.json(err);
  }
});

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

server.get ("/:id/favorites", async (req, res) => {
  const { id } = req.params;
  try {
    const owner = await User.findById (id).select ("favorites");
    res.send (owner);
  } catch (err) {
    console.log (err);
  }
})

server.patch("/:id/favorites", async (req, res) => {
  const { id } = req.params;
  const { walkerId } = req.body;
  try {
    const walker = await User.findById(walkerId);
    const owner = await User.findById(id);
    owner.favorites = [...owner.favorites, walker];
    await owner.save();
    res.send(owner);
  } catch (err) {
    console.log(err);
  }
});

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
    console.log(err);
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
