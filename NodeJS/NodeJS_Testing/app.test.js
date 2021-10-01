const request = require("supertest");
const app = require("./app");

describe("Todos API", () => {

  it("GET /todos--> Array todos", () => {
    return request(app)
    .get('/todos')
    .set('Accept', 'application/json')
    .expect(200)
    .then(response=>{
    expect(response.body).toEqual(
        expect.arrayContaining([
            expect.objectContaining({
                id:expect.any(Number),
                name:expect.any(String),
                completed:expect.any(Boolean)
            })
        ])
    )
    
    })
  });
  it("GET /todos/id--> Specific todo By ID", () => {
    request(app)
      .get("/todos/1")
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual(
          expect.objectContaining({
            id: expect.any(Number),
            name: expect.any(String),
            completed: expect.any(Boolean),
          })
        );
      });
  });
  it('GET /todos/id --> 404 if not Found',()=>{
      request(app).get('/todos/123').expect(404)
  })

  it("GET /todos--> Create Todo", () => {
    request(app)
    .post('/todos')
    .send({id:3,name:"NEXT TO be Prepared",completed:false})
    .expect("Content-Type", /json/)
    .expect(201)
    .then((response)=>{
        expect(body.body).toEqual(
            expect.objectContaining({id:3,name:"NEXT TO be Prepared",completed:false})
        )
    })

  });
  it("GET /todos--> Validate Request Body", () => {});
});
