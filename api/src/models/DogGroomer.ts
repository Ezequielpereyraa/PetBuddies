import mongoose from "mongoose";
import moment from "moment";
import "moment/locale/es";

const DogGroomer = new mongoose.Schema({
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
  },
  workDays: {
    type: String,
  },
  description: {
    type: String,
    trim: true
  },
  /* Fotos para el carousel */
  adsPics: {
    type: Array,
  },
  /* tarifa promedio */
  fee: {
    type: Number,
  },
  reviewsReceived: {
    type: Number
  },
  rating: {
    type: Number,
  },
  phone: {
    type: Number,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  address: {
    type: String,
    trim: true,
  },
  zone: {
    type: String,
    trim: true,
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
    type: Number,
    required: true,
  },
  longitude: {
    type: Number,
    required: true,
  },
  /* De aca para abajo es propio del modelo. */
  services: {
    type: Array,
  },
}, { timestamps: true, versionKey: false }
);

const Groomer = mongoose.model("DogGroomer", DogGroomer);

export default Groomer;
