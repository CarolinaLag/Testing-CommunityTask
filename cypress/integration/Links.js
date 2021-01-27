describe("Check Start links", () => {
  it("Check guestbook link", () => {
    cy.visit("start");

    cy.contains("a", "Gästbok");

    cy.get("a[href='guestbook.html']").click();
    cy.contains("Gästbok!");
  });

  it("Check guestbook go back link", ()=> {
    cy.visit("guestbook");

    cy.contains("a", "Tillbaka");

    cy.get('a[href="start.html"]').click();
    cy.contains("Välkommen");
  });

  it("Check presentation link", () => {
    cy.visit("start");

    cy.contains("a", "Presentation");

    cy.get("a[href='presentation.html']").click();
    cy.contains("Prentation!");
  });

  it("Check presentation go back link", () => {
    cy.visit("presentation");

    cy.contains("a", "Tillbaka");
    
    cy.get('a[href="start.html"]').click();
    cy.contains("Välkommen");
  });

  it("Check log out link", () => {
    cy.visit("start");

    cy.contains("a", "Logga ut");
  });
});
