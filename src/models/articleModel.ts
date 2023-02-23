import dbConnection from './../db/index';

type articleObject={
    NickName:string,
    Title:string,
    Content:string,
    CreationDate:Number
}

class Article{
    constructor(){}
    async createArticle(article:articleObject){
        try{
            let {NickName,Title,Content,CreationDate}=article;
            let query=`insert into articles(NickName,Title,Content,CreationDate) value("${NickName}","${Title}","${Content}","${CreationDate}")`;
            const promise=new Promise((resolve,reject)=>{
                dbConnection.query(query,(err,rows,fields)=>{
                    if(err){
                     reject(new Error(err.message));
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

    async getArticles(limit:number,offset:number){
         try{
            let query= `SELECT * from articles limit ${offset},${limit}`
            const promise=new Promise((resolve,reject)=>{
                dbConnection.query(query,(err,rows,fields)=>{
                    if(err){
                       reject(new Error(err.message))
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
    async getArticlesByLimitedFields(id:string,fields:string){
        try{
           let query= `SELECT ${fields} from articles where id="${id}";`
           const promise=new Promise((resolve,reject)=>{
            dbConnection.query(query,(err,rows,fields)=>{
                if(err){
                 reject(new Error(err.message));
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


export default new Article();