import rateLimit from "express-rate-limit";

// === Global API Limiter ===
// Example: Max 100 requests per IP per 15 minutes
export const globalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 mins
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    status: 429,
    message: "Too many requests. Please try again later."
  }
});

// === Auth / Login Specific Limiter ===
// Example: Max 10 login attempts every 5 minutes
export const authLimiter = rateLimit({
  windowMs: 5 * 60 * 1000, // 5 mins
  max: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    status: 429,
    message: "Too many failed login attempts. Try again later."
  }
});
