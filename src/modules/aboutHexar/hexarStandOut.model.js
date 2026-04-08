import mongoose from "mongoose";
const { Schema, Types } = mongoose;

const hexarStandOutSchema = new Schema({
    standOutTitle: {
        type: String,
        required: true,
    },
    standOutDescription: {
        type: String,
        required: true,
    },
    standOutImageUrl: {
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

export default mongoose.model('hexarStandOut', hexarStandOutSchema);