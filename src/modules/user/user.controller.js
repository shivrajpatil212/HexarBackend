import UserModel from "./user.model.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
const jwtAccessTokenExp = process.env.jwtAccessTokenExp;
const jwtRefreshTokenExp = process.env.jwtRefreshTokenExp;
const jwtSecretKey = process.env.jwtSecretKey;

export const login = async (req, res) => {
    try {
        const user = await UserModel.findOne({ userName: req.body.userName, isActive: true })
        if (!user) {
            return res.badRequest("Invalid email or password.");
        }
        if (!user.isActive) {
            return res.badRequest("User not found");
        }
        const isPasswordMatch = await bcrypt.compare(req.body.password, user.password);
        if (!isPasswordMatch) {
            return res.notFound("Invalid email or password.");
        }
        const userDetails = await UserModel.findOne({ userName: req.body.userName, isActive: true }).select('-password');
        const tokenObject = {
            id: userDetails._id,
            email: userDetails.email,
            userName: userDetails.userName,
            role: userDetails.role,
        }
        const accessToken = jwt.sign(
            tokenObject,
            jwtSecretKey, {
            expiresIn: `${jwtAccessTokenExp}`,
        });
        const refreshToken = jwt.sign(
            tokenObject,
            jwtSecretKey, {
            expiresIn: `${jwtRefreshTokenExp}`,
        });
        const resUser = { user: userDetails, accessToken: accessToken, refreshToken: refreshToken }
        return res.success( resUser, "Login successful",);
    } catch (err) {
        console.error('Error:----------', err);
        return res.internalServerError("An error occurred while fetching the roles.");
    }
};