"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const moment_1 = __importDefault(require("moment"));
require("moment/locale/es");
const WalkSchema = new mongoose_1.default.Schema({
    walker: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
    ownerId: {
        type: String,
        required: true
    },
    pet: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        required: true,
        ref: "Pet",
    },
    status: {
        enum: ["Booked", "Pending", "Completed", "Cancelled"],
        default: "Booked"
    },
    date: {
        type: String,
        default: moment_1.default().format("L") + " " + moment_1.default().format("LTS"),
    }
}, { timestamps: true, versionKey: false });
const Walk = mongoose_1.default.model("Walk", WalkSchema);
exports.default = Walk;
