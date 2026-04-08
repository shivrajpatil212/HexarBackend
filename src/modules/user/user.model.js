import mongoose from "mongoose";
const { Schema, Types } = mongoose;

const UserSchema = new Schema({
    userName: {
        type: String,
        match: [
            /^[a-zA-Z0-9_]{3,15}$/,
            "Username must be 3-15 characters long and can only contain letters, numbers, and underscores"
        ],
        required: true,
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: [true, "Email already exists"],
        match: [
            /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
            "Please enter a valid email"
        ],
    },
    phoneNumber: {
        type: Number,
        required: true,
    },
    role: {
        type: String,
        enum: ['admin', 'user'],
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    pincode: {
        type: String,
        required: true,
    },
    password: {
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

export default mongoose.model('users', UserSchema);