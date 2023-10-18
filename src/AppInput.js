import { useEffect, useState } from "react";
import "./App.css";

export default function AppInput({ handleInput, onSubmit }) {
  const [newTodo, setNewTodo] = useState("");

  function handleSubmit(e) {
    onSubmit(newTodo);
  }

  return (
    <>
      <p className="titleTodo">Daily Planner</p>

      <div className="inputHeader">
        <input onChange={(e) => setNewTodo(e.target.value)} />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </>
  );
}
