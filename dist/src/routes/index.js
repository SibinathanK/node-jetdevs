"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const articleController_1 = require("./../controller/articleController");
const commentsController_1 = require("./../controller/commentsController");
const router = express_1.default.Router();
//Article
router.get("/article", articleController_1.getAllArticles);
router.post("/article", articleController_1.createArticle);
router.get("/article/:id", articleController_1.getArticleContent);
//Comments
router.get("/comments/:id/:type", commentsController_1.getCommentsByType);
router.post("/comments", commentsController_1.createComments);
exports.default = router;
