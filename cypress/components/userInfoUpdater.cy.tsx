import React from "react";
import Display from "../../src/components/Display";
import UserInfoUpdater from "../../src/components/UserInfoUpdater";
import { CounterProvider } from "../../src/context/CounterContext";

describe("User Info Updater Component", () => {
  it("updates user info", () => {
    const initialValue = 5;
    const initialUser = { name: "John Doe", age: 30 };
    const initialSettings = { theme: "light", fontSize: 16 };

    cy.mount(
      <CounterProvider
        initialValue={initialValue}
        user={initialUser}
        settings={initialSettings}
      >
        <Display />
        <UserInfoUpdater />
      </CounterProvider>
    );

    cy.get('input[placeholder="Name"]').type("Jane Doe");
    cy.get('input[placeholder="Age"]').type("25");
    cy.get('button[type="submit"]').click();

    // Check if the user info is updated
    cy.get("p").eq(0).should("contain", "User: Jane Doe");
    cy.get("p").eq(0).should("contain", "Age: 25");
  });
});
