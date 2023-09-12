import CounterDisplay from "./components/CounterDisplay";
import CounterButtons from "./components/CounterButtons";
import { CounterProvider } from "./context/CounterContext";

function App() {
  return (
    <div className="App">
      <h1>Counter App</h1>
      <CounterProvider>
        <CounterDisplay />
        <CounterButtons />
      </CounterProvider>
    </div>
  );
}

export default App;
