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

server.get("/:walkerId", async (req, res) => {
  const { walkerId } = req.params;

  try {
    const walker = await User.findById(walkerId).select(["-role", "-favorites", "-date", "-password"]);
    res.send(walker);
  } catch (err) {
    console.log(err);
  }
})

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
