import React, { useState } from "react";
import { useCounter } from "../context/CounterContext";

function UserInfoUpdater() {
  const { updateUser } = useCounter();
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAge(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateUser(name, Number(age));
    setName("");
    setAge("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={handleNameChange}
      />
      <input
        type="number"
        placeholder="Age"
        value={age}
        onChange={handleAgeChange}
      />
      <button type="submit" id="userButton">
        Update
      </button>
    </form>
  );
}

export default UserInfoUpdater;
