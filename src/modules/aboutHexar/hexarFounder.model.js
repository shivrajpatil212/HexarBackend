import mongoose from "mongoose";
const { Schema, Types } = mongoose;

const hexarFounderSchema = new Schema({
    founderName: {
        type: String,
        required: true,
    },
    founderDesignation: {
        type: String,
        required: true,
    },
    founderImageUrl: {
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

export default mongoose.model('hexarFounder', hexarFounderSchema);