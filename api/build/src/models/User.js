"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const moment_1 = __importDefault(require("moment"));
require("moment/locale/es");
const UserSchema = new mongoose_1.default.Schema({
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
        default: moment_1.default().format("L") + " " + moment_1.default().format("LTS"),
    }
}, { timestamps: true, versionKey: false });
const User = mongoose_1.default.model("User", UserSchema);
exports.default = User;
