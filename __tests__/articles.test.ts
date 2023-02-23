import request from 'supertest'
import app from "../index";


describe("POST /article",()=>{
    describe("given all required fields NickName,Content,CreationDate,articleId,commentId",()=>{
    test('should return 200 with empty json response',async()=>{
           const response=await request(app).post("/article").send({
            "NickName":"This is a nickname",
            "Title":"Sample Title",
            "Content":"Hello world"
           })
           expect(response.statusCode).toBe(200);
    })
    })
})
describe("GET /article",()=>{
    describe("Get all articles",()=>{
    test('should return 200 with empty json response',async()=>{
           const response=await request(app).get("/article")
           expect(response.statusCode).toBe(200);
    })
    })
})


