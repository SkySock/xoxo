import {NextFunction, Request, Response} from "express";
import * as jwt from "jsonwebtoken";
import config from "../core/config";
import {XORequest} from "../base/extendsInterfaces";

const UNAUTHORIZED_ERROR_MSG = {message: "Access Denied / Unauthorized request"};

export async function parseJWTMiddleware(req: XORequest, res: Response, next: NextFunction) {
    req.isAuth = false;
    const authorizationData = req.headers.authorization;
    if (!authorizationData) return next();

    const token = authorizationData.split(' ');
    if (token[0].toLowerCase() !== "bearer" || token.length !== 2) return next();

    try {
        const verifiedPayload = jwt.verify(token[1], config.secretJWT);

        if (typeof verifiedPayload === "string") throw new Error();

        req.userId = verifiedPayload.payload.userId;
        req.isAuth = true;
    } catch (error) {
        return res.status(400).json({message: "Invalid Token"});
    }

    return next();
}
