describe("Login form", () => {

    it("Can log in", () => {

        cy.visit("/");

        cy.get("form");

        cy.get('input[name="username"]').type("CoolUser");
        cy.get('input[name="password"]').type("123123123");

        cy.get("form").submit();

        cy.contains("Välkommen CoolUser").end();

        });

        it("Cannot log in with wrong password", () => {

            cy.visit("/");

            cy.get("form");

            cy.get('input[name="username"]').type("CoolUser");
            cy.get('input[name="password"]').type("321321321");

            cy.get("form").submit();
    
            cy.url().should("include", "e=wronglogin").end();
        })

        it("Wrong username when capslock on", () => {

            cy.visit("/");

            cy.get("form");

            cy.get('input[name="username"]').type("COOLUSER");
            cy.get('input[name="password"]').type("123123123");

            cy.get("form").submit();
    
            cy.url().should("include", "e=wronglogin").end();
        })

        it("Cannot log in, password contains letters", () => {

            cy.visit("/");

            cy.get("form");

            cy.get('input[name="username"]').type("CoolUser");
            cy.get('input[name="password"]').type("onetwothree");

            cy.get("form").submit();
    
            cy.contains("Fel användarnamn eller lösenord!").end();     
        })

        it("Cannot log in with empty blank", () => {

            cy.visit("/");

            cy.get("form");

            cy.get('input[name="username"]');
            cy.get('input[name="password"]');

            cy.get("form").submit();
    
            cy.url().should("include", "e=wronglogin").end();
        })
})