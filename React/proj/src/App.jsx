import React, { useState } from "react";
import "./App.css";

function TodoApp() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);
  const [done, setDone] = useState([]);

  // Add a new task
  const addTask = () => {
    if (task.trim() === "") return;
    setTodos([...todos, task]);
    setTask("");
  };

  // Mark task as done
  const markDone = (index) => {
    const taskToMove = todos[index];
    setTodos(todos.filter((_, i) => i !== index));
    setDone([...done, taskToMove]);
  };

  // Move task back to To-Do
  const markTodo = (index) => {
    const taskToMove = done[index];
    setDone(done.filter((_, i) => i !== index));
    setTodos([...todos, taskToMove]);
  };

  // Delete task from todos
  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  // Delete task from done
  const deleteDone = (index) => {
    setDone(done.filter((_, i) => i !== index));
  };

  return (
    <div className="todo-container">
      <h2 className="todo-title">React To-Do List with Done Section</h2>

      <div className="input-group">
        <input
          type="text"
          placeholder="Enter a task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addTask()}
          className="todo-input"
        />
        <button onClick={addTask} className="add-button">
          Add
        </button>
      </div>

      <div className="list-section">
        <div className="list-group">
          <h3>To Do</h3>
          {todos.length === 0 && <p>No tasks pending</p>}
          <ul className="todo-list">
            {todos.map((todo, index) => (
              <li key={index} className="todo-item">
                {todo}
                <div>
                  <button
                    onClick={() => markDone(index)}
                    className="done-button"
                    title="Mark as Done"
                  >
                    ✓
                  </button>
                  <button
                    onClick={() => deleteTodo(index)}
                    className="delete-button"
                    title="Delete"
                  >
                    ✕
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="list-group">
          <h3>Done</h3>
          {done.length === 0 && <p>No tasks completed</p>}
          <ul className="todo-list">
            {done.map((taskDone, index) => (
              <li key={index} className="todo-item done">
                {taskDone}
                <div>
                  <button
                    onClick={() => markTodo(index)}
                    className="todo-button"
                    title="Mark as To-Do"
                  >
                    ↺
                  </button>
                  <button
                    onClick={() => deleteDone(index)}
                    className="delete-button"
                    title="Delete"
                  >
                    ✕
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TodoApp;

