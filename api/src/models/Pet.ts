import mongoose from 'mongoose';

const PetSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
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
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Owner",
    },
  },
  { timestamps: true, versionKey: false }
);

const Pet = mongoose.model("Pet", PetSchema);

export default Pet;