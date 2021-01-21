import mongoose from 'mongoose';

const PetSchema = new mongoose.Schema({
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
        required: true,
        trim: true,
    },
    vaccines: {
        type: String,
        required: true,
        trim: true,
    },
    neutered: {  // Castrado, no sabes ingles?
        type: Boolean,
        required: true,
    },
    sex: {
        type: String,
        required: true,
        trim: true,
    },
    photo: {
        type: String,
        required: true,
        trim: true,
    },
    ownerId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Owner"
    }
});

const Pet = mongoose.model("Pet", PetSchema);

export default Pet;