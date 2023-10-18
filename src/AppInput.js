import { useEffect, useState } from "react";
import "./App.css";

export default function AppInput({ handleInput, onSubmit }) {
  const [newTodo, setNewTodo] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (newTodo != "") {
      onSubmit(newTodo);
    }

    setNewTodo("");
  }

  return (
    <>
      <p className="titleTodo">Daily Planner</p>

      <div className="inputHeader">
        <input onChange={(e) => setNewTodo(e.target.value)} value={newTodo} />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </>
  );
}
