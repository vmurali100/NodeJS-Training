const app = require("../server");
const Post = require("../models/Post");
const mongoose = require("mongoose");
const supertest = require("supertest");

// TO make sure we connected to Database

beforeEach((done) => {
    mongoose.connect("mongodb://localhost:27017/JestDB",
      { useNewUrlParser: true, useUnifiedTopology: true },
      () => done());
  
  });

  // TO Make sure our data base is closed
  afterEach((done) => {
    mongoose.connection.db.dropDatabase(() => {
      mongoose.connection.close(() => done())
    });
  });

  test ("GET ALL POSTS",async ()=>{

  })

  test("CREATE A NEW POST",async ()=>{

  })

  test("GET A POST WITH AN ID",async ()=>{

  })

  test ("DELETE A POST", async ()=>{

  })

  test("UPDATE A POST ",async()=>{
      
  })