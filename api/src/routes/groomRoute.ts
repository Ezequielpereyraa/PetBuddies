import express from "express";
import Groomer from "../models/DogGroomer";
const server = express.Router();

// Trae DogGroomers
server.get("/", async (req, res) => {
  try {
    const groomers = await Groomer.find();
    res.send(groomers);
  } catch (err) {
    res.send(err);
  }
});

// Trae un DogGroomer
server.get("/:id", async (req, res) => {
  try {
    const groomer = await Groomer.findById(req.params.id);
    res.send(groomer);
  } catch (error) {
    res.send(error);
  }
});

// Crear DogGroomer
server.post("/", async (req, res) => {
  try {
    const broomer: any = await Groomer.create(req.body);
    await broomer.save();
    res.send(broomer);
  } catch (error) {
    res.json(error);
  }
});

// Actualizar DogGroomer

export default server;
