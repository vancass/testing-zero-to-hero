const chai = require("chai"),
    chaiHttp = require("chai-http");

const expect = require('chai').expect;

const app = require('../../app')

chai.use(chaiHttp);

describe("Pokemon API", function() {
    describe("GET /api/pokemons", function() {
        it("should list all pokemons", function(done) {

            // Fire a request to /api/pokemons
            // chai.request("http://localhost:3000") // just your host name
            chai.request(app)
                .get("/api/pokemons") // post, put, delete, etc
                .send()
                .end(function(err, res) {
                    // Validate the response
                    // - status should be 200
                    // - response body should be an array
                    expect(res).to.have.status(200);
                    expect(res).to.be.json;
                    expect(res.body).to.have.lengthOf(721); // assert the no of pokemons


                    done();
                });
        });

        // Test to validate that the filter work
        // Send name=Pikachu
        // Validate that you get one pokemon back, and the name is Pikachu

        it("should get Pikachu", function(done) {
            // chai.request("http://localhost:3000")
            chai.request(app)
                .get("/api/pokemons?name=Pikachu")
                .send()
                .end(function(err, res) {
                    expect(res).to.have.status(200);
                    expect(res.body).to.have.lengthOf(1);
                    expect(res.body[0].name).to.be.equal("Pikachu");

                    done();
                })
        })
    });
});
