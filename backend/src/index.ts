import express, {Express, Request, Response} from "express";
import dotenv from "dotenv";
import App from "./core";


dotenv.config();

const port = process.env.PORT;


const app = new App(port);
app.start();