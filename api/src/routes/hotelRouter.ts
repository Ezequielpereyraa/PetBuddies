import express from "express";
import Hotels from "../models/Hotels";
import User from "../models/User";
const server = express.Router();

// trae todos los hoteles
server.get("/", async (req, res) => {
  try {
    const hotelsFound = await Hotels.find();
    res.send(hotelsFound);
  } catch (error) {
    res.send(error);
  }
});

//trae un hotel por id
server.get("/:id", async (req, res) => {
  try {
    const hotelById = await Hotels.findById(req.params.id);
    res.send(hotelById);
  } catch (err) {
    res.send(err);
  }
});

// trae los hoteles favoritos de cada usuario
server.get("/:id/favorites", async (req, res) => {
  const { id } = req.params;
  try {
    const owner = await User.findById(id).select("favoritesHotels");
    res.send(owner);
  } catch (err) {
    res.send(err);
  }
});

//agrega un hotel
server.post("/", async (req, res) => {
  try {
    const hotelCreate = await Hotels.create(req.body);
    await hotelCreate.save();
    res.send(hotelCreate);
  } catch (err) {
    console.log(err);
  }
});

//edita un hotel
server.put("/:id", async (req, res) => {
  try {
    const hotelEdit = await Hotels.findByIdAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    res.send(hotelEdit);
  } catch (err) {
    res.send(err);
  }
});

export default server;
