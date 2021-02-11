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
    
    var serviceToModify;

    if (req.body.serviceType === 'Hotel') serviceToModify = await Hotel.findById (req.body.reviewedId);
    else if (req.body.serviceType === 'DogGroomer') serviceToModify = await Groomer.findById (req.body.reviewedId);
    else if (req.body.serviceType === 'Walker') serviceToModify = await User.findById (req.body.reviewedId);
    
    var copyOfReviewsReceived = serviceToModify.reviewsReceived;
    copyOfReviewsReceived = copyOfReviewsReceived.concat (req.body.rating);
    var sum = copyOfReviewsReceived.reduce ((acc: number, curr: number) => {
      return acc + curr
    }, 0)
    var prom = (sum / copyOfReviewsReceived.length).toFixed (2);
    console.log ('REQ BODY RATING', req.body.rating);
    console.log ('SUM TOTAL', sum);
    console.log ('PROMEDIO', prom);

    serviceToModify.reviewsReceived = serviceToModify.reviewsReceived.concat (req.body.rating);
    serviceToModify.rating = prom;
    serviceToModify.save ();

    res.send({review});
  } catch (error) {
    res.status(500).send ('Error.');
  }
})

// const body = {
//   serviceType: service,
//   userId: user._id,
//   userName: `${user.name} ${user.lastname}`,
//   reviewedId: companyName.hotelId,
//   rating: rating,
//   reviewText: input,
// };

export default server;
