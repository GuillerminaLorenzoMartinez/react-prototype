describe("Counter App", () => {
  beforeEach(() => {
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

  it("updates user info", () => {
    // Update user info
    cy.get('input[placeholder="Name"]').type("Jane Doe");
    cy.get('input[placeholder="Age"]').type("25");
    cy.get("button[id^=userButton]").click();

    // Verify updated user info
    cy.get("p").eq(0).should("contain", "User: Jane Doe");
    cy.get("p").eq(0).should("contain", "Age: 25");
  });

  it("updates settings info", () => {
    // Update settings info
    cy.get('input[placeholder="Theme"]').type("dark");
    cy.get('input[placeholder="fontSize"]').type("18");
    cy.get("button[id^=settingsButton]").click();

    // Verify updated settings info
    cy.get("p").eq(1).should("contain", "Theme: dark");
    cy.get("p").eq(1).should("contain", "Font Size: 18px");
  });
});
