import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        const mongoUri = process.env.LIVE_DB_URI
        const dbConnect = await mongoose.connect(mongoUri);
        console.log(`Connected to MongoDB ${dbConnect.connection.host} successfully!`);
    } catch (error) {
        console.error("Error connecting to MongoDB:", error.message);
        process.exit(1);
    }
};

export default connectDB;