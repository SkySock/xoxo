import * as jwt from "jsonwebtoken";
import config from "../../core/config";
import {AuthDTO} from "../../dto/auth";
import usersDAO from "../../dao/users/usersDAO";
import {HttpError} from "../../base/errors";
import {CreateUserDTO, MinimalUserInfoDTO} from "../../dto/users";
import {RegistrationUserDTO} from "../../dto/auth"
import {errorToString, hashPassword} from "../../base/utils";


interface JWTUserPayload {
    userId: string;
    username: string;
}


class AuthService {
    async signUp(userData: RegistrationUserDTO): Promise<MinimalUserInfoDTO> {
        try {
            let newUser: CreateUserDTO = {
                ...userData,
                password: await hashPassword(userData.password),
            }
            return (await usersDAO.create(newUser))[0];
        } catch (e) {
            const error = errorToString(e);
            throw new Error(error);
        }
    }

    async getJWT(authData: AuthDTO) {
        return usersDAO.verifyPassword(authData.username, authData.password)
            .then(({isVerified, userId}) => {
                if (isVerified) {
                    const payload: JWTUserPayload = {
                        userId,
                        username: authData.username,
                    };
                    return this.#generateJWT(payload);
                } else {
                    throw new HttpError({message: "wrongPassword"}, 422);
                }
            })
            .catch((err) => {
                throw err;
            });
    }

    #generateJWT(payload: JWTUserPayload): string {
        const signature = config.secretJWT;
        const expiration = Math.floor(Date.now() / 1000) + (60 * 60 * 24 * 30);

        return jwt.sign({ payload, }, signature, { expiresIn: expiration });
    }

}

export const authService = new AuthService();