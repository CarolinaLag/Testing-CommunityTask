describe("Guestbook form", () => {
  it("Recieve message about being unable to post with too few letters", () => {
    cy.visit("/guestbook");
    cy.get("textarea").type("Så");
    cy.get("form").submit();
    cy.contains("För kort meddelande!").end();
  });

  it("Recieve message about being unable to post with too few letters when not typing anything at all", () => {
    cy.visit("/guestbook");
    cy.get("form").submit();
    cy.contains("För kort meddelande!").end();
  });

  it("Make a post", () => {
    cy.visit("/guestbook");
    cy.get("textarea").type("Hej");
    cy.get("form").submit();
    cy.contains("Hej");
    cy.window().its("localStorage").invoke("getItem", "guestbook").should("exist");
    cy.end();
  });

  it("Make a several posts and remove last post and post nr 2", () => {
    cy.visit("/guestbook");
    let numberOfPosts = 0;

    while (numberOfPosts < 5) {
      cy.get("textarea").type("Post nr" + numberOfPosts);
      cy.get("form").submit();
      cy.contains("Post nr" + numberOfPosts);
      numberOfPosts++;
    }

    cy.window().its("localStorage").invoke("getItem", "guestbook").should('contain', 4);

    cy.get('a[onclick="removeEntry(4);"]').click();
    cy.get('a[onclick="removeEntry(4);"]').should("not.exist");

    cy.window().its("localStorage").invoke("getItem", "guestbook").should('not.contain', 4);

    cy.get('a[onclick="removeEntry(1);"]').click();
    cy.get('a[onclick*="removeEntry"]').should("have.length", numberOfPosts - 2);

    cy.window().its("localStorage").invoke("getItem", "guestbook").should('not.contain', 1);

    cy.end();
  });

  it("Make a several posts and remove all of them", () => {
    cy.visit("/guestbook");
    let numberOfPosts = 0;
    let numberToDelete = 5;

    while (numberOfPosts < 5) {
      cy.get("textarea").type("Post nr" + numberOfPosts);
      cy.get("form").submit();
      cy.contains("Post nr" + numberOfPosts);
      numberOfPosts++;
    }

    while (numberToDelete > 0) {
      cy.get('a[onclick="removeEntry(0);"]').click();
      cy.get('a[onclick*="removeEntry"]').should("have.length", numberToDelete - 1);
      numberToDelete--;
    }

    cy.window().its("localStorage").invoke("getItem", "guestbook").should("contain", "");

    cy.end();
  });

  it("Be able to go back to start page", ()=> {
    cy.visit("/guestbook");
    cy.get('a[href="start.html"]').click();
  });
});
