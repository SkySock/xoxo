import {Request} from "express";


export interface XORequest extends Request {
    isAuth?: boolean;
    userId?: string;
}