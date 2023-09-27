import React from "react";
import Display from "../../src/components/Display";
import SettingsInfoUpdater from "../../src/components/SettingsInfoUpdater";
import { CounterProvider } from "../../src/context/CounterContext";

describe("Settings Info Updater Component", () => {
  it("updates settings info", () => {
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
        <SettingsInfoUpdater />
      </CounterProvider>
    );

    cy.get('input[placeholder="Theme"]').type("dark");
    cy.get('input[placeholder="fontSize"]').type("18");
    cy.get('button[type="submit"]').click();

    // Check if the settings info is updated
    cy.get("p").eq(1).should("contain", "Theme: dark");
    cy.get("p").eq(1).should("contain", "Font Size: 18");
  });
});
