import Display from "../../src/components/Display"; // Adjust the path as per your project structure
import { CounterProvider } from "../../src/context/CounterContext"; // Adjust the path as per your project structure

describe("Display Component", () => {
  it("renders the display with the correct value", () => {
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
      </CounterProvider>
    );

    // Check if the component renders correctly with the initial value
    cy.get("h1").should("contain", "Counter Value: 5");
  });
});
