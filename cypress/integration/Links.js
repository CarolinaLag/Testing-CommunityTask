describe("Check Start links", () => {

    it("Check guestbook link", () => {

        cy.visit("start");
            
                    cy.contains("a", "Gästbok");
       
    
    })

    it("Check presentation link", () => {

        cy.visit("start");
            
                    cy.contains("a", "Presentation");
       
    
    })

    
    it("Check go back link", () => {

        cy.visit("presentation");
            
                    cy.contains("a", "Tillbaka");
       
    
    })

    it("Check log out link", () => {

        cy.visit("start");
            
                    cy.contains("a", "Logga ut");
       
    
    })


} )