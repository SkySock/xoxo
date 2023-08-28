import {BaseUserInfoDto, CreateUserDTO, MinimalUserInfoDTO, UserInfoInListDto} from "../../dto/users";
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

    public async getPaged(limit: number = 20, offset: number = 0) {
        const users: UserInfoInListDto[] = await db("users")
            .select(db.raw("id, username, display_name, (extract(epoch from (now() - birthday::date)) / 31536000)::int AS age, gender, joined_at"))
            .offset(offset)
            .limit(limit);
        // console.log(users)
        return users
    }

    public async count() {
        const result = await db("users").count().first();
        if (!result) {
            return 0;
        }
        return +result.count;
    }

}

export default new UsersDAO();