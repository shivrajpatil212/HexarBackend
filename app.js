import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import helmet from "helmet";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import routes from './src/routes/index.js';
import { corsOptions } from './src/config/cors.js';
import { globalLimiter } from './src/config/ratelimit.js';
import { errors } from 'celebrate';
import { responseMiddleware } from './src/middlewares/responseMiddleware.js';
import { errorMiddleware } from './src/middlewares/errorMiddleware.js';

const app = express();

// -------- Security & Essentials --------
app.use(helmet());
app.use(cors(corsOptions));
app.use(globalLimiter);

// -------- Body Parsing --------
app.use(express.json({ limit: '5mb' }));
app.use(express.urlencoded({ limit: '5mb', extended: true }));
app.use(cookieParser());

// -------- Logging --------
app.use(morgan(process.env.NODE_ENV === "production" ? "combined" : "dev"));

// Response Helpers
app.use(responseMiddleware);

// -------- Static Serving --------
app.use(express.static("public"));
app.use('/uploads',
    (req, res, next) => {
        res.setHeader('Cross-Origin-Resource-Policy', 'cross-origin');
        res.setHeader('Cross-Origin-Opener-Policy', 'unsafe-none');
        next();
    },
    express.static('uploads')
);

// -------- Routes --------
app.use("/api", routes);

// -------- 404 Handler --------
app.use((req, res) => {
  console.warn(`Unknown URL accessed -→ ${req.method} ${req.originalUrl}`);
  return res.notFound(`Route not found: ${req.originalUrl}`);
});

// Celebrate Validation Errors + Global Error Handler
app.use(errors());
app.use(errorMiddleware)

export default app;