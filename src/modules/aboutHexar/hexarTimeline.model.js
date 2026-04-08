import mongoose from "mongoose";
const { Schema, Types } = mongoose;

const hexarTimelineSchema = new Schema({
    timelineYear: {
        type: String,
        required: true,
    },
    timelineTitle: {
        type: String,
        required: true,
    },
    timelineDescription: {
        type: String,
        required: true,
    },
    timelineImageUrl: {
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

export default mongoose.model('hexarTimeline', hexarTimelineSchema);