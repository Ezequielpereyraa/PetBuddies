import mongoose from "mongoose";
import moment from "moment";
import "moment/locale/es";

const DogGroomer = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  photo: {
    type: Array,
    trim: true,
  },
  workHours: {
    type: String,
  },
  workDays: {
    type: String,
  },
  services: {
    type: Array,
  },
  reviews: {
    type: Number,
    require: false,
  },
  phone: {
    type: Number,
    trim: true,
  },
  whatsapp: {
    type: Number,
    trim: true,
  },
  mail: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  address: {
    type: String,
    trim: true,
  },
  localidad: {
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
});

const Groomer = mongoose.model("DogGroomer", DogGroomer);

export default Groomer;
