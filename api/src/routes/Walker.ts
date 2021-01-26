import express from "express";
import User from "../models/User";
const server = express.Router();
const bcrypt = require("bcrypt");
import { ownerIt } from "./types";

// ESTA RUTA DEVUELVE TODOS LOS PASEADORES 
server.get("/", async (req, res) => {
  try {
    const walkers = await User.find({ role: "Walker" });
    res.send(walkers);
  } catch (err) {
    res.send(err);
  }
});

// ESTA RUTA DEVUELVE LOS DATOS DE UN PASEADOR EN ESPECIFICO
server.get("/:walkerId", async (req, res) => {
  const { walkerId } = req.params;

  try {
    const walker = await User.findById(walkerId).select(["-role", "-favorites", "-date", "-password"]);
    res.send(walker);
  } catch (err) {
    res.send(err);
  }
})

// ESTA RUTA DEVUELVE PASEADORES POR ZONA
server.get("/zone/:zone", async (req, res) => {
  const zone: string = req.params.zone;

  try {
    const walkers = await User.find({ role: "Walker" }).select(["-role", "-favorites", "-date", "-password"]);
    var filteredWalkers = walkers.filter((walker: { workZone: String[] }) => walker.workZone.includes(zone))
    res.send(filteredWalkers);
  } catch (err) {
    res.send(err);
  }
});

// ESTA RUTA ES PARA REGISTRO DE UN WALKER 
// A LA HORA DE AGREGAR NUEVOS USUARIOS VERIFICAR LA RESPUESTA AL TENER EMAIL DUPLICADO
server.post("/", async (req, res) => {
  const { password } = req.body;
  try {
    const pass: string = bcrypt.hashSync(password, 10);
    const walker:any = await User.create(req.body);
    walker.role="Walker";
    walker.password = pass;
    await walker.save();
    res.send(walker);
  } catch (err) {
    res.json(err);
  }
});

// ESTA RUTA ES PARA EDITAR LOS DATOS DE UN PASEADOR
server.put("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const walker = await User.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    res.send(walker);
  } catch (err) {
    res.send(err);
  }
});

export default server;
