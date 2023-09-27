import Display from "./components/Display";
import CounterButtons from "./components/CounterButtons";
import UserInfoUpdater from "./components/UserInfoUpdater";
import { CounterProvider } from "./context/CounterContext";
import SettingsInfoUpdater from "./components/SettingsInfoUpdater";

function App() {
  const initialValue = 0;
  const initialUser = { name: "John Doe", age: 30 };
  const initialSettings = { theme: "dark", fontSize: 18 };

  return (
    <div className="App">
      <h1>Counter App</h1>
      <CounterProvider
        initialValue={initialValue}
        user={initialUser}
        settings={initialSettings}
      >
        <Display />
        <CounterButtons />
        <UserInfoUpdater />
        <SettingsInfoUpdater />
      </CounterProvider>
    </div>
  );
}

export default App;
