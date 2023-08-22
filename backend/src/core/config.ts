
interface Config {
    secretJWT: string;
}


const secretJWT = process.env.SECRET_JWT;
if (!secretJWT) {
    throw Error("SECRET_JWT environment not found");
}


const config: Config = {
    secretJWT
}

export default config;
