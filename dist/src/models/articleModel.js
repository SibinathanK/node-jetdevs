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
class Article {
    constructor() { }
    createArticle(article) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let { NickName, Title, Content, CreationDate } = article;
                let query = `insert into articles(NickName,Title,Content,CreationDate) value("${NickName}","${Title}","${Content}","${CreationDate}")`;
                const promise = new Promise((resolve, reject) => {
                    index_1.default.query(query, (err, rows, fields) => {
                        if (err) {
                            reject(new Error(err.message));
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
    getArticles(limit, offset) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let query = `SELECT * from articles limit ${offset},${limit}`;
                const promise = new Promise((resolve, reject) => {
                    index_1.default.query(query, (err, rows, fields) => {
                        if (err) {
                            reject(new Error(err.message));
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
    getArticlesByLimitedFields(id, fields) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let query = `SELECT ${fields} from articles where id="${id}";`;
                const promise = new Promise((resolve, reject) => {
                    index_1.default.query(query, (err, rows, fields) => {
                        if (err) {
                            reject(new Error(err.message));
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
exports.default = new Article();
