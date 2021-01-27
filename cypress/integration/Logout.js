describe("Logout form", () => {

    it("Logging out", () => {

        cy.visit("start");

        cy.get("a");

        cy.contains("a", "Logga ut").click();

        cy.contains("Coola communityt!").end();

        })
})