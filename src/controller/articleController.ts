import { NextFunction,Request,Response } from "express";
import Article from "../models/articleModel";

const createArticle=async(req:Request,res:Response,next:NextFunction)=>{
    try{
         const {NickName,Title,Content}:any=req.body;
         if(!NickName || !Title || !Content){
            throw new Error("Missing Fields")
         }
         await Article.createArticle({NickName,Title,Content,CreationDate:Date.now()})
         res.status(200).json();
    }
    catch(err){
        next(err);
    }
}

const getArticleContent=async(req:Request,res:Response,next:NextFunction)=>{
    try{
         const id:any=req.params.id;
         if(!id){
            throw new Error("Missing Fields")
         }
         const article=await Article.getArticlesByLimitedFields(id,"(content)");
         res.json({article});
    }
    catch(err){
        next(err);
    }
}
const getAllArticles=async(req:Request,res:Response,next:NextFunction)=>{
    try{
         let limit:any=req.query.limit;
         let offset:any=req.query.offset
         if(!limit){
            limit=20
         }
         if(!offset){
            offset=0
         }
         const article=await Article.getArticles(limit,offset);
         res.json({article});
    }
    catch(err){
        next(err);
    }
}


export  {createArticle,getArticleContent,getAllArticles};