const expect = require("chai").expect;

const Pokedex = require("../../db/Pokedex");
const Pokemon = require("../../models/Pokemon");

describe("Pokedex", function() {
    var pokedex = new Pokedex();

    // Chai provides "before" hooks
    before(async function() {
        // Create pokedex
        // await pokedex.connect("./storage/test.sqlite3");
    });

    // Chai provides the "after" hooks
    after(async function() {
        // Delete the data in the pokedex
        // await pokedex.deleteAll();
    });

    describe("#save", function() {
        it("should add a pokemon", async function() {
            // Create the pokedex
            const pokedex = new Pokedex();
            pokedex.connect("./storage/test.sqlite3");

            // Add a pokemon
            const pokemon = new Pokemon();
            pokemon.setName("Pikachu");

            // Expect the pokemon to have an ID
            // await pokedex.save(pokemon);
            // expect(pokemon.id).to.exist;
        });
    });

    describe("#get", function() {
        it("should get a pokemon by id", async function() {
            pokedex.connect("./storage/test.sqlite3");

            const pokemon = await pokedex.get(182);

            // expect(pokemon.name).to.be.equal('Pikachu');
        });
    });

    describe("#getByName", function() {
        it("should get a pokemon by name", async function() {
            pokedex.connect("./storage/test.sqlite3");

            const pokemon = await pokedex.getByName("Pikachu");
            expect(pokemon).to.exist;
        });
    });

    describe("#find", function() {
        it("should find pokemon by attributes", async function() {
            pokedex.connect("./storage/test.sqlite3");

            const pokemon = await pokedex.find({ filter: { types: ["Electric"] } });
            expect(pokemon).to.exist;
        });
    });
});
