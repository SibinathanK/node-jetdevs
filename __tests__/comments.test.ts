import request from 'supertest'
import app from "../index";


describe("POST /comments",()=>{
    describe("given all required fields NickName,articleId,Content",()=>{
    test('should return 200 with empty json response',async()=>{
           const response=await request(app).post("/comments").send({
            "NickName":"NickName",
            "Content":"Comment is content-testing",
            "articleId":"1"
           })
           expect(response.statusCode).toBe(200);
    })
    })
})

describe("GET /comments",()=>{
    describe("Get all articles",()=>{
    test('should return 200 with empty json response',async()=>{
           const response=await request(app).get("/comments/1/article")
           expect(response.statusCode).toBe(200);
    })
    })
})

