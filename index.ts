import express ,{Express,Request,Response} from "express"
import './src/db/index';
import Router from './src/routes/index'

const app:Express=express();
app.use(express.json());

app.get("/",(req:Request,res:Response)=>{
    res.send('<h1>Server is running successfull</h1>')
})
app.use(Router);
app.listen(4000,()=>{
    console.log("Listening to Port 4000")
})

app.use((err:any,req:any,res:any,next:any)=>{
    res.status(500).json({
      err:err
    })
  })
export default app;