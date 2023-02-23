"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_1 = __importDefault(require("mysql"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({});
const createConnection = () => {
    const connection = mysql_1.default.createConnection({
        host: process.env.HOST,
        user: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DATABASE,
        port: 7326
    });
    connection.connect((err) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log("DB Connected Successfully");
        }
    });
};
exports.default = createConnection;