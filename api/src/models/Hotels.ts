import mongoose from "mongoose";
import "moment/locale/es";

const HotelSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    logo: {
      type: String,
      trim: true,
    },
    workHours: {
      type: String,
      // required: true,
    },
    workDays: {
      type: String,
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
      // required: true,
    },
    reviewsReceived: {
      type: Number,
    },
    rating: {
      type: Number,
    },
    phone: {
      type: String,
      // required: true,
    },
    email: {
      type: String,
      trim: true,
      // unique: true,
    },
    address: {
      type: String,
      // required: true,
    },
    zone: {
      type: String,
      trim: true,
      // required: true,
    },
    provincia: {
      type: String,
      trim: true,
    },
    pais: {
      type: String,
      trim: true,
    },
    latitude: {
      type: Number
    },
    longitude: {
      type: Number
    },
    /* De aca para abajo es propio del modelo. */
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
    petsLoved: {
      type: Number,
    },
    extras: {
      type: Array,
    },
    allowedPets: {
      type: Array,
      // required: true,
    },
    foodInclude: {
      type: Boolean,
      default: false,
    },
    requirement: {
      type: String,
    },
  },
  { timestamps: true, versionKey: false }
);

const Hotel = mongoose.model("Hotel", HotelSchema);

export default Hotel;
