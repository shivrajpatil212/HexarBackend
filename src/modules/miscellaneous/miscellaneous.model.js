import mongoose from "mongoose";
const { Schema, Types } = mongoose;

const miscellaneousSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    isActive: {
        type: Boolean,
        default: true,
    },
}, {
    timestamps: true,
    strict: false
});

export default mongoose.model('miscellaneous', miscellaneousSchema);