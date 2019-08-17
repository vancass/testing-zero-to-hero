const expect = require("chai").expect;

describe("E2E Tests", function() {
    describe("Search for pokemon", function() {
        it("should return result for Pikachu", function() {
            // Navigate to our application on http://localhost:3000
            browser.url("http://localhost:3000");

            // Next steps:
            // - search for pikachu
            // ${selector}.setValue(value)
            $("#pokemon-search-form-name-input").setValue("Pikachu");

            // - click on the search button
            $("#pokemon-search-form-submit-btn").click();

            // - check the number of result
            // - check if #25 shows up
            // - check that #25 is pikachu
            const summaryResult = $(".pokemon-count").getText();
            expect(summaryResult).to.be.equal("1");

            const idResult = $(".pokemon-card-id").getText();
            expect(idResult).to.be.equal("#25");

            // Chrome right click -> Copy -> Copy XPath
            const nameResult = $("/html/body/div[2]/a/div/div/h3/span").getText();
            expect(nameResult).to.be.equal("Pikachu");

            // Wait so we can see what's happening
            browser.pause(10000);
        });
    });
});
