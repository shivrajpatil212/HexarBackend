import { createServer } from 'http';
import 'dotenv/config';
import app from './app.js';
import os from "os";
import connectDB from './src/config/dbconnection.js';

const getLocalIPAddress = () => {
    const interfaces = os.networkInterfaces();
    for (const name of Object.keys(interfaces)) {
        for (const net of interfaces[name]) {
            const ipv4Family = typeof net.family === "string" ? net.family === "IPv4" : net.family === 4;

            if (ipv4Family && !net.internal) {
                return net.address; // Stop searching once found
            }
        }
    }
    return "127.0.0.1"; // fallback
};

const StartExpressServer = async () => {
    try {
        await connectDB();

        const server = createServer(app)
        const portNumber = process.env.LIVE_PORT
        const ipAddress = getLocalIPAddress();

        server.listen(portNumber, '0.0.0.0', () => {
            console.log(`Server is running on port ${portNumber}`);
            console.log("--------------------------------------");
            console.log(`📌 Local:  http://localhost:${portNumber}`);
            console.log(`📌 LAN:    http://${ipAddress}:${portNumber}`);
            console.log("--------------------------------------\n");
        });

    } catch (error) {
        console.error('Error starting the server:', error.message);
        process.exit(1);
    }
}

StartExpressServer();