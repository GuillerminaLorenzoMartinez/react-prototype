import { createContext, useContext, useState, ReactNode } from "react";

type CounterContextType = {
  count: number;
  increment: () => void;
  decrement: () => void;
  user: { name: string; age: number };
  settings: { theme: string; fontSize: number };
  updateUser: (name: string, age: number) => void;
  updateSettings: (theme: string, fontSize: number) => void;
};

const CounterContext = createContext<CounterContextType | null>(null);

export function useCounter() {
  const context = useContext(CounterContext);
  if (!context) {
    throw new Error("useCounter must be used within a CounterProvider");
  }
  return context;
}

interface MyContextProviderProps {
  children: ReactNode;
  initialValue: number;
  user: { name: string; age: number };
  settings: { theme: string; fontSize: number };
}

export function CounterProvider({
  children,
  initialValue,
  user: initialUser,
  settings: initialSettings,
}: MyContextProviderProps) {
  const [count, setCount] = useState(initialValue);
  const [user, setUser] = useState(initialUser);
  const [settings, setSettings] = useState(initialSettings);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  const updateUser = (name: string, age: number) => {
    setUser({ name, age });
  };
  const updateSettings = (theme: string, fontSize: number) => {
    setSettings({ theme, fontSize });
  };

  return (
    <CounterContext.Provider
      value={{
        count,
        increment,
        decrement,
        user,
        updateUser,
        settings,
        updateSettings,
      }}
    >
      {children}
    </CounterContext.Provider>
  );
}
