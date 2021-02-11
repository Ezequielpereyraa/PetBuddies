import express from "express";
import Review from "../models/Review";
import User from "../models/User";
import Hotel from "../models/Hotels";
import Groomer from "../models/DogGroomer";

const server = express.Router();

server.get("/:service/:id", async (req, res) => {
  const { service, id } = req.params;
  try {
    const review = await Review.find({ serviceType: service, reviewedId:id });
    res.send(review);
  } catch (error) {
    res.status(500).send("Error");
  }
});

server.post("/", async (req,res)=>{
  try {
    const review = await Review.create (req.body);
    await review.save();
    res.send({review});
  } catch (error) {
    res.status(500).send ('Error.');
  }
})

export default server;
