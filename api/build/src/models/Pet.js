"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const PetSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    age: {
        type: Number,
        required: true,
    },
    race: {
        type: String,
        required: true,
        trim: true,
    },
    size: {
        type: String,
        enum: ["small", "medium", "large"],
        required: true,
    },
    vaccines: {
        type: Boolean,
        required: true,
    },
    neutered: {
        // Castrado, no sabes ingles?
        type: Boolean,
        required: true,
    },
    sex: {
        type: String,
        enum: ["male", "female"],
        required: true,
    },
    photo: {
        type: String,
        required: true,
        trim: true,
    },
    ownerId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
}, { timestamps: true, versionKey: false });
const Pet = mongoose_1.default.model("Pet", PetSchema);
exports.default = Pet;
