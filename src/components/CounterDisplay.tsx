import { useCounter } from "../context/CounterContext";

function CounterDisplay() {
  const { count } = useCounter();

  return (
    <div>
      <h1>Counter Value: {count}</h1>
    </div>
  );
}

export default CounterDisplay;
