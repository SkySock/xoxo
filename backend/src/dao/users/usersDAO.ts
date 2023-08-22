import {BaseUserInfoDto, CreateUserDTO, MinimalUserInfoDTO} from "../../dto/users";
import db from "../../database/db";
import {verifyPassword} from "../../base/utils";
import {HttpError} from "../../base/errors";

class UsersDAO {
    public async create(newUser: CreateUserDTO): Promise<MinimalUserInfoDTO[]> {
        return db('users').insert(newUser, ["id", "username"]);
    }

    public async getById(id: string): Promise<BaseUserInfoDto> {
        return db("users")
            .where('id', id)
            .select(
                "id",
                "username",
                "display_name",
                "birthday",
                "gender",
                "joined_at"
            ).first();
    }

    public async getByUsername(username: string): Promise<BaseUserInfoDto> {
        return db("users")
            .where('username', username)
            .select(
                "id",
                "username",
                "display_name",
                "birthday",
                "gender",
                "joined_at"
            ).first();
    }

    public async verifyPassword(username: string, password: string) {
        const user: {id: string, password: string} = await db("users").where("username", username).select("id", "password").first();
        if (!user) {
            throw new HttpError({message: "usernameNotExists"}, 422);
        }

        const isVerified = await verifyPassword(password, user.password);

        return {isVerified, userId: user.id};
    }

}

export default new UsersDAO();