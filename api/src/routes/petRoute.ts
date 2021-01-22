import express from "express";
import Pet from "../models/Pet";
const server = express.Router();

// Tener previamente el ID del OWNER
server.post("/", async ( req, res ) => {
  try {
    const pet = await Pet.create(req.body);
    await pet.save();
    res.send(pet);
  } catch (error) {
    res.json(error);
  }
});

server.get("/", async ( req, res ) => {
  try {
    const pets = await Pet.find();
    res.send(pets);
  } catch (error) {
    res.send('No encontró')
  }
});

server.get("/:id", async( req, res ) => {
 try {
   const pet = await Pet.findById(req.params.id)
   res.send(pet);
 } catch (error) {
   res.send('no anduvo')
 }
})

export default server;