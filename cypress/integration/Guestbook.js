describe("Guestbook form", () => {
  it("Recieve message about being unable to post with too few letters", () => {
    cy.visit("/guestbook");
    cy.get("textarea").type("Så");
    cy.get("form").submit();
    cy.contains("För kort meddelande!").end();
  });

  it("Recieve message about being unable to post with too few letters when not typing anything at all", () => {
    cy.get("form").submit();
    cy.contains("För kort meddelande!").end();
  });

  it("Make a post", () => {
    cy.get("textarea").type("Hej");
    cy.get("form").submit();
    cy.contains("Hej").end();
  });

  it("Make a several posts and remove last post", () => {
    let numberOfLoops = 5;

    while (numberOfLoops > 0) {
      cy.get("textarea").type("Post nr" + numberOfLoops);
      cy.get("form").submit();
      cy.contains("Post nr" + numberOfLoops);
      numberOfLoops--;
    }

    cy.get('a[onclick="removeEntry(4);"]').click();
    cy.get('a[onclick="removeEntry(4);"]').should("not.exist");

    cy.end();
  });

  it("Make a several posts and remove a post", () => {
    let numberOfPosts = 0;

    while (numberOfPosts < 5) {
      cy.get("textarea").type("Post nr" + numberOfPosts);
      cy.get("form").submit();
      cy.contains("Post nr" + numberOfPosts);
      numberOfPosts++;
    }

    cy.get('a[onclick="removeEntry(0);"]').click();
    cy.get('a[onclick="removeEntry(4);"]').should("not.exist");

    cy.end();
  });

  it("Make a several posts and remove all posts", () => {
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

    cy.end();
  });
});
