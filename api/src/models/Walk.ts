import mongoose from "mongoose";
import moment from "moment";
import "moment/locale/es";

const WalkSchema = new mongoose.Schema({
    walker: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
    ownerId: {
        type: String,
        required: true
    },
    pet: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Pet",
    },
    status: {
        enum: ["Booked", "Pending", "Completed", "Cancelled"],
        default: "Booked"
    },
    date: {
        type: String,
        default: moment().format("L") + " " + moment().format("LTS"),
      }
},   { timestamps: true, versionKey: false }
)
const Walk = mongoose.model("Walk", WalkSchema);

export default Walk;
