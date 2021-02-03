import mongoose from "mongoose";
import moment from "moment";
import "moment/locale/es";

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
    },
    lastname: {
      type: String,
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
      trim: true,
    },
    cellphone: {
      type: Number,
      trim: true,
    },
    address: {
      type: String,
      trim: true,
    },
    zona: {
      type: String,
      trim: true,
    },
    dni: {
      type: Number,
      trim: true,
    },
    photo: {
      type: String,
      trim: true,
    },
    favorites: {
      // Arrays de ids de los walkers
      type: Array,
      ref: "User",
    },
    favoritesHotels:{
      type: Array,
      ref: "Hotel",
    },
    role: {
      type: String,
      enum: ["Owner", "Walker", "Admin"],
      default: "Owner",
    },
    fee: {
      type: Number,
    },
    CUIT: {
      type: String,
    },
    workZone: {
      type: Array,
    },
    workHours: {
      type: String,
    },
    description: {
      type: String,
    },
    walks: {
      type: Number
    },
    reveiewsReceived: {
      type: Number
    },
    rating: {
      type: Number
    },
    date: {
      type: String,
      default: moment().format("L") + " " + moment().format("LTS"),
    }
  },
  { timestamps: true, versionKey: false }
);

const User = mongoose.model("User", UserSchema);

export default User;
