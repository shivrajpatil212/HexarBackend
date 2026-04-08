import mongoose from "mongoose";
const { Schema, Types } = mongoose;

const bannerSchema = new Schema({
    bannerTitle: {
        type: String,
        required: true,
    },
    bannerSubTitle: {
        type: String,
        required: true,
    },
    bannerImage: {
        type: String,
        required: true,
    },
    bannerBackgroundVideo: {
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

export default mongoose.model('banner', bannerSchema);