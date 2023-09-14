// cypress/integration/counterDisplay.spec.tsx
import React from "react";
import CounterDisplay from "../../src/components/CounterDisplay"; // Adjust the path as per your project structure
import { CounterProvider } from "../../src/context/CounterContext"; // Adjust the path as per your project structure

describe("Counter Display Component", () => {
  it("renders the counter display with the correct value", () => {
    const initialValue = 5;

    cy.mount(
      <CounterProvider initialValue={initialValue}>
        <CounterDisplay />
      </CounterProvider>
    );

    // Check if the component renders correctly with the initial value
    cy.get("h1").should("contain", "Counter Value: 5");
  });
});
