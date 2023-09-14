describe("template spec", () => {
  before("passes", () => {
    cy.visit("http://localhost:3000/");
  });
  it("increments and decrements the counter", () => {
    // Verify the initial counter value
    cy.get("h1").should("contain", "Counter Value: 0");

    // Increment the counter
    cy.get('button[aria-label="Increment"]').click();
    cy.get("h1").should("contain", "Counter Value: 1");

    // Decrement the counter
    cy.get('button[aria-label="Decrement"]').click();
    cy.get("h1").should("contain", "Counter Value: 0");
  });
});
