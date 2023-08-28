import {XORequest} from "../../base/extendsInterfaces";
import {Response} from "express";
import {usersService} from "../../services";


export async function getUsersList(req: XORequest, res: Response) {
    const rawOffset = req.query.offset;
    const rawLimit = req.query.limit;
    let limit;
    let offset;
    if (typeof rawOffset === "string") {
        offset = +rawOffset;
        if (isNaN(offset)) {
            offset = 0;
        }
    }
    if (typeof rawLimit === "string") {
        limit = +rawLimit;
        if (isNaN(limit)) {
            limit = 30;
        }
    }

    let baseUrl = `${req.protocol}://${req.header("host")}${req.path}`;


    let data = await usersService.getList(limit, offset, baseUrl);
    res.json(data);
}