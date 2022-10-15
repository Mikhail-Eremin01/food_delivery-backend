import ApiError from "../exceptions/api-error";
import tokenService from "../service/token-service.ts";
import express from 'express';
interface IUser {
    email: string,
    password: string
}

export default function (req: any, res: express.Response, next: express.NextFunction) {
    try {
        const authorizationHeader = req.headers.authorization;
        if (!authorizationHeader) {
            return next(ApiError.UnauthorizedError());
        }
        const accessToken = authorizationHeader.split(" ")[1];
        if (!accessToken) {
            return next(ApiError.UnauthorizedError());
        }
        const userData = tokenService.validateAccessToken(accessToken);
        if (!userData) {
            return next(ApiError.UnauthorizedError());
        }
        req.user = userData;
        next();
    } catch (error) {
        return next(ApiError.UnauthorizedError());
    }
};

