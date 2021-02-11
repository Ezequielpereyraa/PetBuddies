import mongoose from "mongoose";
import moment from "moment";
import "moment/locale/es";

const ReviewSchema = new mongoose.Schema(
  {
    serviceType: {
      type: String,
      trim: true,
      enum: ["Walker", "Hotel", "DogGroomer"],
    },
    userId: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
    },
    reviewedId: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
    },
    reviewText: {
      type: String,
    },
    date: {
      type: String,
      default: moment().format("L") + " " + moment().format("LTS"),
    },
  },
  { timestamps: true, versionKey: false }
);

const Review = mongoose.model("Review", ReviewSchema);

export default Review;
