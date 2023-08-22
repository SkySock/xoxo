import {Request, Response} from "express";
import {authService} from "../../services";
import {authValidateFn} from "./validators";
import {HttpError} from "../../base/errors";

export async function signInController(req: Request, res: Response) {
    if (!authValidateFn(req.body)) {
        return res.status(400).json(authValidateFn.errors);
    }
    authService.getJWT(req.body)
        .then((token) => {
            res.status(201).json({token});
        })
        .catch((err) => {
            if (err instanceof HttpError) {
                res.status(err.code).json(err.message);
            } else {
                res.sendStatus(500);
            }
        });
}