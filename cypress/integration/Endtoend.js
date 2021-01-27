describe("e2e", () => {

    it("Can sign in", () => {

        cy.visit("/");

        cy.get("form");

        cy.get('input[name="username"]').type("CoolUser").should("have.value", "CoolUser")
        
        cy.get('input[name="password"]').type("123123123").should("have.value", "123123123")
        
        cy.get("form").submit();

        cy.url().should("include", "start").end();
    
    })

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

        it("Check Sign in link", () => {

            cy.visit("register?%3Cmarquee%3EAnv%C3%A4daren%20registrerad!%20%3Ca%20href=%27/%27%3ELogga%20in%20h%C3%A4r!%3C/a%3E%3C/marquee%3E");
    
            cy.contains("a", "Logga in här!");
        
        })

    })

    it("Can go to Guestbook", () => {

        cy.visit("start");
            
        cy.contains("a", "Gästbok");

        cy.get("a[href='guestbook.html']").click();
        cy.contains("Gästbok!");
    
    })

    it("Can go back link Guestbook", () => {

        cy.visit("guestbook");
            
        cy.contains("a", "Tillbaka");

        cy.get('a[href="start.html"]').click();
        cy.contains("Välkommen");
    
    })

    it("Check presentation link", () => {

        cy.visit("start");
            
        cy.contains("a", "Presentation");

        cy.get("a[href='presentation.html']").click();
        cy.contains("Prentation!");
    
    })

    it("Check go back link presentation", () => {

        cy.visit("presentation");
            
        cy.contains("a", "Tillbaka");

        cy.get('a[href="start.html"]').click();
        cy.contains("Välkommen");
    
    })

    it("Check log out link", () => {

        cy.visit("start");
            
        cy.contains("a", "Logga ut");
       
        
    })

    


    
   
} )
