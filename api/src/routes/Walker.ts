import express from "express";
import User from "../models/User";
const server = express.Router();

server.get("/", async (req, res) => {
  try {
    const walkers = await User.find({ role: "Walker" });
    res.send(walkers);
  } catch (err) {
    res.send(err);
  }
});

server.get("/:zone", async (req, res) => {
  const { zone } = req.params;
  try {
    const walkers = await User.find({ role: "Walker", workZone: zone });
    res.send(walkers);
  } catch (err) {
    res.send(err);
  }
});

server.post("/", async (req, res) => {
  try {
    const walker = await User.create(req.body);
    await walker.save();
    res.send(walker);
  } catch (err) {
    res.json(err);
  }
});

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
