describe("Signup form", () => {

    it("Can register", () => {

        cy.visit("/");

        cy.get("a").click();

        cy.get("form");

        cy.get('input[name="username"]').type("CoolUser").should("have.value", "CoolUser")
        cy.get('input[name="email"]').type("email@live.se");
        cy.get('input[name="password"]').type("123123123").should("have.value", "123123123")
        
        cy.get("form").submit();

        // cy.url().should("include", "start").end();
        cy.contains("Registrera!").end();
    
    })

   
} )