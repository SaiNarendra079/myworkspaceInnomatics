import { useState } from "react";
import TodoList from "../todolist/TodoList";
import './TodoApp.css'

export const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input.trim()) {
      setTasks([...tasks, { id: Date.now(), input, completed: false }]);
      setInput("");
    }
  };

  const deleteTodo = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <>
    <div className="maindiv">
      <h1>Todo App</h1>
      <input className="inputfield"
        type="text"
        placeholder="enter your text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addTodo}>Add Task</button>

      {/* Props Drilling  interview questions / */}
      <TodoList
        tasks={tasks}
        deleteTodo={deleteTodo}
        toggleComplete={toggleComplete}
      />
      </div>
    </>
  );
};