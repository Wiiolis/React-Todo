import { useEffect, useState } from "react";
import "./App.css";
import AppHeader from "./AppHeader.js";
import AppInput from "./AppInput.js";

function App() {
  const [todoList, setTodoList] = useState([]);

  function handleCompleted(id, completed) {
    setTodoList((currentTodoList) => {
      return currentTodoList.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }

        return todo;
      });
    });
  }

  function handleClearCompleted() {
    setTodoList((currentTodoList) => {
      return currentTodoList.filter((todo) => {
        if (todo.completed === false) {
          return todo;
        }

        return null;
      });
    });
  }

  function handleNewTodo(newTodo) {
    console.log(newTodo);
    setTodoList((currentTodoList) => {
      return [
        ...currentTodoList,
        {
          id: crypto.randomUUID(),
          name: newTodo,
          completed: false,
        },
      ];
    });
  }

  function handleTodoDelete(id) {
    setTodoList((currentTodoList) => {
      return currentTodoList.filter((todo) => todo.id != id);
    });
  }

  useEffect(() => {}, todoList);

  return (
    <div className="App">
      <AppHeader />
      <AppInput onSubmit={handleNewTodo} />

      <div>
        <p>{todoList.length == 0 && "No items in the list"}</p>
        <ul className="todoList">
          {todoList.map((todo) => {
            return (
              <li
                className={todo.completed ? "listItemActive" : "listItem"}
                key={todo.id}
              >
                <p>
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={(e) => handleCompleted(todo.id, e.target.checked)}
                  />
                  {todo.name}
                </p>
                <button
                  onClick={() => handleTodoDelete(todo.id)}
                  className="deleteButton"
                >
                  delete
                </button>
              </li>
            );
          })}
        </ul>

        <button onClick={() => handleClearCompleted()} className="clearButton">
          Clear Completed
        </button>
      </div>
    </div>
  );
}

export default App;
