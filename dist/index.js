"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("./src/db/index");
const index_1 = __importDefault(require("./src/routes/index"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.send('<h1>Server is running successfull</h1>');
});
app.use(index_1.default);
app.listen(4000, () => {
    console.log("Listening to Port 4000");
});
app.use((err, req, res, next) => {
    res.status(500).json({
        err: err
    });
});
exports.default = app;
