import mysql from "mysql2";
import dotenv from "dotenv"
dotenv.config({});
const connection=mysql.createConnection({
        host     : process.env.HOST,
        user     : process.env.USER,
        password : process.env.PASSWORD,
        database : process.env.DATABASE,
        port:7326,
        multipleStatements: true
    })
 connection.connect((err)=>{
        if(err){
            console.log(err)
        }
        else{
            console.log("DB Connected Successfully");
        }
    })
export default connection;


