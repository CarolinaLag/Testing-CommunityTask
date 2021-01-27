describe("Signup form", () => {

    it("Can register", () => {

        cy.visit("/");

        cy.get("a").click();

        cy.get("form");

        cy.get('input[name="username"]').type("CoolUser").should("have.value", "CoolUser")
        cy.get('input[name="email"]').type("email@live.se");
        cy.get('input[name="password"]').type("123123123").should("have.value", "123123123")
        cy.get('input[name="passwordConfirm"]').type("123123123").should("have.value", "123123123")
        
        cy.get("form").submit();

        cy.contains("Registrera!").end();
    
    })
    it("Can register with too long password", () => {
        cy.visit("/");
        cy.get("a").click();
        cy.get("form");
        cy.get('input[name="username"]').type("CoolUser");
        cy.get('input[name="email"]').type("email@live.se");
        cy.get('input[name="password"]').type("123123123123123123123123");
        cy.get('input[name="passwordConfirm"]').type("123123123123123123123123");
        cy.get("form").submit();

        cy.contains("Registrera!").end();
    })



    it("Cant register with wrong password", () => {

        cy.visit("/");
        cy.get("a").click();
        cy.get("form");
        cy.get('input[name="username"]').type("CoolUser");
        cy.get('input[name="email"]').type("email@live.se");
        cy.get('input[name="password"]').type("123123");
        cy.get('input[name="passwordConfirm"]').type("123123123");
        cy.get("form").submit();

        cy.contains("Lösenorden överensstämmer inte!").end();


        cy.visit("/");
        cy.get("a").click();
        cy.get("form");
        cy.get('input[name="username"]').type("CoolUser");
        cy.get('input[name="email"]').type("email@live.se");
        cy.get('input[name="password"]').type("1");
        cy.get('input[name="passwordConfirm"]').type("1");
        cy.get("form").submit();

        cy.contains("Du har valt för kort lösenord").end();

        })
        it("Cant register with too long username", () => {

            cy.visit("/");
            cy.get("a").click();
            cy.get("form");
            cy.get('input[name="username"]').type("CoolUserCoolUserCoolUser");
            cy.get('input[name="email"]').type("email@live.se");
            cy.get('input[name="password"]').type("123123");
            cy.get('input[name="passwordConfirm"]').type("123123");
            cy.get("form").submit();
    
            cy.contains("För kort eller för långt användarnamn!").end();
    
            })
            it("Cant register with too short username", () => {

                cy.visit("/");
                cy.get("a").click();
                cy.get("form");
                cy.get('input[name="username"]').type("Co");
                cy.get('input[name="email"]').type("email@live.se");
                cy.get('input[name="password"]').type("123123");
                cy.get('input[name="passwordConfirm"]').type("123123");
                cy.get("form").submit();
        
                cy.contains("För kort eller för långt användarnamn!").end();
        
                })
                it("Email validation", () => {

                    cy.visit("/");
                    cy.get("a").click();
            
                    cy.contains("Registrera!");
            
                    cy.get("form");
                    cy.get('input[name="username"]').type("CoolUser");
                    cy.get('input[name="email"]').type("email");
                    cy.get('input[name="password"]').type("123123");
                    cy.get('input[name="passwordConfirm"]').type("123123");
                    cy.get("form").submit();
                    cy.contains("Felformatterad e-postadress!");
            
                    cy.get("form");
                    cy.get('input[name="username"]').type("CoolUser");
                    cy.get('input[name="email"]').type("email@");
                    cy.get('input[name="password"]').type("123123");
                    cy.get('input[name="passwordConfirm"]').type("123123");
                    cy.get("form").submit();
                    cy.contains("Felformatterad e-postadress!").end();

                    cy.get("form");
                    cy.get('input[name="username"]').type("CoolUser");
                    cy.get('input[name="email"]').type("email.");
                    cy.get('input[name="password"]').type("123123");
                    cy.get('input[name="passwordConfirm"]').type("123123");
                    cy.get("form").submit();
                    cy.contains("Felformatterad e-postadress!").end();

                    cy.get("form");
                    cy.get('input[name="username"]').type("CoolUser");
                    cy.get('input[name="email"]').type("email@liveemail@live");
                    cy.get('input[name="password"]').type("123123");
                    cy.get('input[name="passwordConfirm"]').type("123123");
                    cy.get("form").submit();
                    cy.contains("Felformatterad e-postadress!").end();
            
                })

   
} )