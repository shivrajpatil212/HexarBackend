import { Router } from 'express';
import { login } from './user.controller.js';
import { loginValidation } from './user.validation.js';
import { authLimiter } from '../../config/ratelimit.js';

const userRoute = Router();

userRoute.post("/login", authLimiter, loginValidation, login);

export default userRoute;