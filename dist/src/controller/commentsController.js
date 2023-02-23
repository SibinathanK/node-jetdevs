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
exports.getCommentsByType = exports.createComments = void 0;
const commentsModel_1 = __importDefault(require("./../models/commentsModel"));
const date_1 = __importDefault(require("../utils/date"));
const createComments = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { NickName, Content, articleId, commentId, type } = req.body;
        if (!NickName || !Content) {
            throw new Error("Missing Fields");
        }
        if (type === "article" && !articleId || type === "comment" && !commentId) {
            throw new Error("Missing Fields");
        }
        const CreationDate = (0, date_1.default)();
        yield commentsModel_1.default.createComment({ NickName, Content, CreationDate, articleId, commentId });
        res.status(200).json();
    }
    catch (err) {
        next(err);
    }
});
exports.createComments = createComments;
const getCommentsByType = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const type = req.params.type;
        if (!id || !type) {
            throw new Error("Missing Fields");
        }
        const article = yield commentsModel_1.default.getCommentsByType(id.toString(), type.toString());
        res.json({ article });
    }
    catch (err) {
        next(err);
    }
});
exports.getCommentsByType = getCommentsByType;
