import { useCounter } from "../context/CounterContext";

function CounterButtons() {
  const { increment, decrement } = useCounter();

  return (
    <div>
      <button onClick={increment} aria-label="Increment">
        Increment
      </button>
      <button onClick={decrement} aria-label="Decrement">
        Decrement
      </button>
    </div>
  );
}

export default CounterButtons;
