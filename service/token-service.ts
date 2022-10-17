import jwt from "jsonwebtoken";
import tokenModel from "../models/token";

interface IPayload {
    id: string,
    isActivated: boolean,
    email: string
}

class TokenService {
    generateTokens(payload:IPayload) {
        const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET as string, {
            expiresIn: "15s",
        });
        const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET as string, {
            expiresIn: "30d",
        });
        return { accessToken, refreshToken };
    }

    validateRefreshToken(token:string) {
        try {
            const userData = jwt.verify(token, process.env.JWT_REFRESH_SECRET as string);
            return userData;
        } catch (error) {
            return null;
        }
    }

    async saveToken(userId:string, refreshToken:string) {
        const tokenData = await tokenModel.findOne({ user: userId });
        if (tokenData) {
            tokenData.refreshToken = refreshToken;
            return tokenData.save();
        }
        const token = await tokenModel.create({ user: userId, refreshToken });
        return token;
    }

    async removeToken(refreshToken:string) {
        const tokenData = await tokenModel.deleteOne({ refreshToken });
        return tokenData;
    }

    async findToken(refreshToken:string) {
        const tokenData = await tokenModel.findOne({ refreshToken });
        return tokenData;
    }
}

export default new TokenService();
