import express from "express";
import bodyParser from "body-parser";
import { config } from "dotenv";


export const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
config({
    path:"./database/config.env"
})

app.get('/', (req, res) => {
    res.send("hello world")
})

