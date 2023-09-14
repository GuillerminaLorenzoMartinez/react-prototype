import React from "react";
import App from "../../src/App";

describe("Counter Buttons", () => {
  beforeEach(() => {
    cy.mount(<App />);
  });

  it("increments the counter", () => {
    cy.get('button[aria-label="Increment"]').click();

    cy.get("h1").should("contain", "Counter Value: 1");
  });

  it("decrements the counter", () => {
    cy.get('button[aria-label="Decrement"]').click();

    cy.get("h1").should("contain", "Counter Value: -1");
  });
});
