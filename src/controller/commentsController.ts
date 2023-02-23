import { Request,Response,NextFunction } from "express";
import Comments from "./../models/commentsModel";
import getCurrentDate from "../utils/date";

const createComments=async(req:Request,res:Response,next:NextFunction)=>{
    try{
        const {NickName,Content,articleId,commentId,type}:any=req.body;
         if(!NickName || !Content){
            throw new Error("Missing Fields");
         }
         if(type==="article" && !articleId || type==="comment" && !commentId){
            throw new Error("Missing Fields");
         }
         const CreationDate=getCurrentDate();
         await Comments.createComment({NickName,Content,CreationDate,articleId,commentId})
         res.status(200).json();
    }
    catch(err){
        next(err);
    }
}

const getCommentsByType=async(req:Request,res:Response,next:NextFunction)=>{
    try{
         const id=req.params.id;
         const type=req.params.type;
         if(!id || !type){
            throw new Error("Missing Fields")
         }
         const article=await Comments.getCommentsByType(id.toString(),type.toString());
         res.json({article});
    }
    catch(err){
        next(err);
    }
}

export {createComments,getCommentsByType};