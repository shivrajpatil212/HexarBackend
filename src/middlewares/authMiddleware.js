import jwt from "jsonwebtoken";
import UserModel from "../modules/user/user.model.js";

export const protect = async (req, res, next) => {
  try {
    let token;
    if (req.headers.authorization?.startsWith("Bearer ")) {
      token = req.headers.authorization.split(" ")[1];
    }
    if (!token) {
      return res.unauthorized("User token is required");
    }
    let decoded;
    try {
      decoded = jwt.verify(token, process.env.JWT_SECRET);
    } catch (err) {
      if (err.name === "TokenExpiredError") {
        return res.unauthorized("User token is expired");
      }
      return res.unauthorized("User token is not valid");
    }

    const user = await UserModel.findById(decoded.id);
    if (!user) {
      return res.notFound("User not found");
    }
    if (user.isActive === false) {
      return res.forbidden("User is inactive");
    }
    req.user = user;
    req.auth = decoded;
    next();

  } catch (error) {
    console.error("Auth Protect Error:", error);
    return res.internalServerError("Error while verifying token");
  }
};

// AUTHORIZATION (role-based)
export const authorize = (...roles) => {
  return (req, res, next) => {
    try {
      if (!req.user) {
        return res.unauthorized("User not authenticated");
      }

      if (roles.length && !roles.includes(req.user.role)) {
        return res.forbidden(
          `Role ${req.user.role} is not allowed to access this resource`
        );
      }
      next();

    } catch (error) {
      console.error("Authorize Error:", error);
      return res.internalServerError("Authorization failed");
    }
  };
};