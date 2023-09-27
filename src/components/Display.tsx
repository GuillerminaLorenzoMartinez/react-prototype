import { useCounter } from "../context/CounterContext";

function Display() {
  const { count, user, settings } = useCounter();

  return (
    <div>
      <h1>Counter Value: {count}</h1>
      {user && (
        <p>
          User: {user.name}, Age: {user.age}
        </p>
      )}
      <p>
        Theme: {settings.theme}, Font Size: {settings.fontSize}px
      </p>
    </div>
  );
}

export default Display;
