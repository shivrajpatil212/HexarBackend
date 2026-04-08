const allowedOrigins = process.env.ALLOWED_ORIGINS
  ? process.env.ALLOWED_ORIGINS.split(",").map(o => o.trim())
  : [];
  
export const corsOptions = {
  origin: function (origin, callback) {
    // Allow Postman, CURL, server-to-server calls (no `Origin`)
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    }
    // Reject gracefully
    console.warn(`🚫 CORS blocked: ${origin}`);
    return callback(new Error(`CORS not allowed for origin: ${origin}`), false);
  },

  methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  allowedHeaders: [
    "Content-Type",
    "Authorization",
    "Accept",
    "X-Requested-With"
  ],
  credentials: true,
  optionsSuccessStatus: 200, // Fix for legacy browsers
};