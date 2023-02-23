import express, { Router } from "express";
import {createArticle,getArticleContent,getAllArticles} from './../controller/articleController';
import {createComments,getCommentsByType} from './../controller/commentsController'

const router:Router=express.Router();

//Article

router.get("/article",getAllArticles)
router.post("/article",createArticle)
router.get("/article/:id",getArticleContent)

//Comments

router.get("/comments/:id/:type",getCommentsByType)
router.post("/comments",createComments)



export default router;