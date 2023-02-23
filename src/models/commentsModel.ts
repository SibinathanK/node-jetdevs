import dbConnection from './../db/index';

type CommentsObject={
    NickName:string,Content:string,CreationDate:string,articleId:string,commentId:string
}

class Comments{
    constructor(){}
    async createComment(Comment:CommentsObject){
        try{
            const {NickName,Content,CreationDate,articleId,commentId}=Comment;
            let query=`insert into comments(NickName,Content,CreationDate,articleId,commentId) value("${NickName}","${Content}","${CreationDate}","${articleId}","${commentId}")`;
            const promise=new Promise((resolve,reject)=>{
                dbConnection.query(query,(err,rows,fields)=>{
                    if(err){
                     reject(err.message);
                    }
                    resolve(rows);
                 })  
            })
            return promise;
        }
        catch(err){
            return err;
        }
    }

    async getCommentsByType(id:string,type:string){
         try{
            let query= `SELECT * from comments where ${type}Id = ${id}`;
            const promise=new Promise((resolve,reject)=>{
                dbConnection.query(query,(err,rows,fields)=>{
                    if(err){
                         reject(err.message)
                    }
                    resolve(rows);
                })
            })
            return promise;
         }
         catch(err){
            return err;
         }
    }
}

export default new Comments();