describe("Guestbook form", ()=> {
    it("Recieve message about being unable to post with too few letters", ()=> {
        cy.visit("/guestbook");
        // cy.get("textarea").type("Så");
        cy.get("form").submit();
        cy.contains("För kort meddelande!").end();
    });

    it("Make a post", ()=> {
        cy.get("textarea").type("Hej");
        cy.get("form").submit();
        cy.contains("Hej").end();
    });

    it("Make a several posts", ()=> {
        let numberOfLoops = 5;

        while (numberOfLoops > 0) {
            cy.get("textarea").type("Post nr" + numberOfLoops);
            cy.get("form").submit();
            cy.contains("Post nr" + numberOfLoops);
            numberOfLoops--;
        }

        cy.end();
    });

    it("Remove first post", ()=> {
        cy.get('a[onclick="removeEntry(0);"]').click();
        cy.get('a[onclick="removeEntry(0);"]').should('not.exist');
        cy.end();
    });
});