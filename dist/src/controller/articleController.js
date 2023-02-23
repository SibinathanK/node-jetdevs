"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllArticles = exports.getArticleContent = exports.createArticle = void 0;
const articleModel_1 = __importDefault(require("../models/articleModel"));
const createArticle = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { NickName, Title, Content } = req.body;
        if (!NickName || !Title || !Content) {
            throw new Error("Missing Fields");
        }
        yield articleModel_1.default.createArticle({ NickName, Title, Content, CreationDate: Date.now() });
        res.status(200).json();
    }
    catch (err) {
        next(err);
    }
});
exports.createArticle = createArticle;
const getArticleContent = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        if (!id) {
            throw new Error("Missing Fields");
        }
        const article = yield articleModel_1.default.getArticlesByLimitedFields(id, "(content)");
        res.json({ article });
    }
    catch (err) {
        next(err);
    }
});
exports.getArticleContent = getArticleContent;
const getAllArticles = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let limit = req.query.limit;
        let offset = req.query.offset;
        if (!limit) {
            limit = 20;
        }
        if (!offset) {
            offset = 0;
        }
        const article = yield articleModel_1.default.getArticles(limit, offset);
        res.json({ article });
    }
    catch (err) {
        next(err);
    }
});
exports.getAllArticles = getAllArticles;
