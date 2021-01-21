import mongoose from "mongoose";

const OwnerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  lastname: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  cellphone: {
    type: Number,
    required: true,
    trim: true,
  },
  address: {
    type: String,
    required: true,
    trim: true,
  },

  zona: {
    type: String,
    required: true,
    trim: true,
  },
  isAdmin: {
    type: Boolean,
    required: true,
  },
  dni: {
    type: Number,
    required: true,
    trim: true,
  },
  photo: {
    type: String,
    required: true,
    trim: true,
  },
});

const Owner = mongoose.model("Owner", OwnerSchema);

export default Owner;
