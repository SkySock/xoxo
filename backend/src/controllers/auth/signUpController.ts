import {Request, Response} from "express";
import {registrationValidateFn} from "./validators";
import {authService} from "../../services";



export async function signUpController(req: Request, res: Response) {
    if (!registrationValidateFn(req.body)) {
        return res.status(400).json(registrationValidateFn.errors);
    }

    authService.signUp(req.body)
        .then((user) => {
            res.status(201).json(user);
        })
        .catch((err) => {
            res.status(400).send({message: "username already exists"});
        });
}
