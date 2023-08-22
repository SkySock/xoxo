import * as crypto from "crypto";
import argon2 from "argon2";


const hashingConfig = { // based on OWASP cheat sheet recommendations on April 2023
    parallelism: 1,
    memoryCost: 16000,
    timeCost: 3
}


export async function hashPassword(password: string) {
    let salt = crypto.randomBytes(16);
    return argon2.hash(password, {
        ...hashingConfig,
        salt,
    });
}

export async function verifyPassword(password: string, hash: string) {
    return argon2.verify(hash, password, hashingConfig);
}


export function errorToString(e: unknown) {
    let error: string = "";
    if (typeof e === "string") {
        error = e;
    } else if (e instanceof Error) {
        error = e.message;
    }
    return error;
}
