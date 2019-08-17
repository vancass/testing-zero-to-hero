const assert = require("assert"); // From node.js built-in
const Pokemon = require("../../models/Pokemon");

const should = require("chai").should(); // the "should" module extends Object.prototype
const expect = require("chai").expect;


// The suite for Pokemon class
describe("Pokemon", function() {
    // Test suite for the "setName" method
    describe("#setName()", function() {
        // Write the test case here

        // Test case #1
        it("should set name when given a non-empty string", function() {
            var pokemon = new Pokemon();
            pokemon.setName("Pikachu");

            // Validate that pokemon.name has the correct value

            // === Using Node.JS "assert"
            // assert.equal(pokemon.name, "Pikakchu");
            // assert(pokemon.name === "Pikachu"); // can also be written like this

            // === Using chai
            pokemon.name.should.be.equal("Pikachu");
            // expect(pokemon.name).to.be.equal("Pikadchu");

        });

        // Test case #2
        it("should throw error when given a null value", function() {
            // The function that should throw an error
            const setPokemonNameToNull = function() {
                let pokemon = new Pokemon();
                pokemon.setName(null);
            }

            // Validate that an exception has been thrown
            expect(setPokemonNameToNull).to.throw();
            
        });
    });

    describe("#setHp()", function() {
        it("should set hp when given integer", function() {
            let pokemon = new Pokemon();
            pokemon.setHp(10);

            pokemon.hp.should.be.equal(10);
        })

        it("should throw error when hp is not integer", function() {
            const setHpNotInteger = function() {
                let pokemon = new Pokemon();
                pokemon.setHp('not integer');
            }

            expect(setHpNotInteger).to.throw();
            


        })
    })
});
