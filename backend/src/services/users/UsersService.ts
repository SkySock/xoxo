import {CreateUserDTO, MinimalUserInfoDTO, UserEntityDTO} from "../../dto/users";
import usersDAO from "../../dao/users/usersDAO";
import {errorToString, hashPassword} from "../../base/utils";

class UsersService {
    async getList(limit: number = 30, offset: number = 0, baseUrl: string) {
        if (limit > 100) {
            limit = 100
        }
        const count = await usersDAO.count();
        const users = await usersDAO.getPaged(limit, offset);

        const nextOffset = offset+limit;
        let nextPage = null;

        if (nextOffset <= count) {
            nextPage = `${baseUrl}?limit=${limit}&offset=${nextOffset}`;
        }
        return {users, count, nextPage};
    }
}

export const usersService = new UsersService();