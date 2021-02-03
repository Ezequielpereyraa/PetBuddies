import mongoose from "mongoose";
import moment from "moment";
import "moment/locale/es";

const HotelSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    photo: {
      type: String,
      trim: true,
    },
    schedule: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      trim: true,
    },
    adsPics: {
      type: Array,
    },
    fee: {
      type: Number,
      required: true,
    },
    allowedPets: {
      type: Array,
      required: true,
    },
    foodInclude: {
      type: Boolean,
      default: false,
    },
    requirement: {
      type: String,
    },
    zone: {
      type: String,
      trim: true,
      required: true,
    },
    celphone: {
      type: String,
      required: true,
    },
    allowedNumber: {
      // Cantidad de cupos disponibles
      type: Number,
    },
    checkIn: {
      type: Number,
    },
    checkOut: {
      type: Number,
    },
    email: {
      type: String,
      trim: true,
      unique: true,
    },
    address: {
      type: String,
      required: true,
    },
    reviewsReceived: {
      type: Number,
    },
    rating: {
      type: Number,
    },
    petsLoved: {
      type: Number,
    },
    extras: {
      type: Array,
    },
    latitude: {
      type: Number
    },
    longitude: {
      type: Number
    }
  },
  { timestamps: true, versionKey: false }
);

const Hotel = mongoose.model("Hotel", HotelSchema);

export default Hotel;
