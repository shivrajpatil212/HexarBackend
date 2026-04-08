import mongoose from "mongoose";
const { Schema, Types } = mongoose;

const hexarFamilySchema = new Schema({
    familyTitle: {
        type: String,
        required: true,
    },
    familyDescription: {
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

export default mongoose.model('hexarFamily', hexarFamilySchema);