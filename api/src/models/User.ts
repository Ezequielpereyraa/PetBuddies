import mongoose from "mongoose";
import * as moment from "moment";
import "moment/locale/es";

const UserSchema = new mongoose.Schema(
  {
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
      trim: true,
    },
    address: {
      type: String,
      trim: true,
    },
    zona: {
      type: String,
      required: true,
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
    role: {
      type: String,
      enum: ["Owner", "Walker", "Admin"],
      default: "Owner",
    },
    CUIT: {
      type: String,
    },
    workZone: {
      type: String,
    },
    workHours: {
      type: String,
    },
    description: {
      type: String,
    },
    
  },
  { timestamps:true,
    versionKey: false
  }
);

const User = mongoose.model("User", UserSchema);

export default User;
