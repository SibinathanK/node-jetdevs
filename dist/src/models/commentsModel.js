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
const index_1 = __importDefault(require("./../db/index"));
class Comments {
    constructor() { }
    createComment(Comment) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { NickName, Content, CreationDate, articleId, commentId } = Comment;
                let query = `insert into comments(NickName,Content,CreationDate,articleId,commentId) value("${NickName}","${Content}","${CreationDate}","${articleId}","${commentId}")`;
                const promise = new Promise((resolve, reject) => {
                    index_1.default.query(query, (err, rows, fields) => {
                        if (err) {
                            reject(err.message);
                        }
                        resolve(rows);
                    });
                });
                return promise;
            }
            catch (err) {
                return err;
            }
        });
    }
    getCommentsByType(id, type) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let query = `SELECT * from comments where ${type}Id = ${id}`;
                const promise = new Promise((resolve, reject) => {
                    index_1.default.query(query, (err, rows, fields) => {
                        if (err) {
                            reject(err.message);
                        }
                        resolve(rows);
                    });
                });
                return promise;
            }
            catch (err) {
                return err;
            }
        });
    }
}
exports.default = new Comments();
