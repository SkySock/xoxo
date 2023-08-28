import express from "express";
import { createServer, Server } from "http";
import {signInController, signUpController} from "../controllers";
import {parseJWTMiddleware} from "../middlewares/auth";
import {XORequest} from "../base/extendsInterfaces";
import cors from "cors";
import morgan from "morgan";
import usersDAO from "../dao/users/usersDAO";
import {getUsersList} from "../controllers/users/usersListController";

class App {
    public port: string;
    public host: string;

    #app: express.Application;
    #server: Server;

    constructor(port: string = "8000", host = "localhost") {
        this.port = port;
        this.host = host;

        this.#app = this.#createApp();
        this.#server = this.#createServer();
    }

    #createApp(): express.Application {
        const app = express();
        app.use(express.urlencoded({
            extended: true
        }));
        app.use(express.json());
        app.use(cors())
        app.use(parseJWTMiddleware);
        app.use(morgan("dev"));

        app.post("/v1/signUp", signUpController);
        app.post("/v1/signIn", signInController);
        app.get("/v1/users", getUsersList);

        return app;
    }

    #createServer(): Server {
        const server = createServer(this.#app);
        return server;
    }

    public start(): void {
        this.#server.listen(this.port, () => {
            console.log(`Running server on http://${this.host}:${this.port}`);
        });
    }
}

export default App;