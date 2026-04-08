import { Router } from 'express';
import { login } from './user.controller.js';
import { loginValidation } from './user.validation.js';

const userRoute = Router();

userRoute.post("/login", loginValidation, login);

export default userRoute;