import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState({
    title: "",
    description: "",
    targetDate: "",
  });

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/todos", {
        headers: {
          Accept: "application/json",
        },
      });
      if (Array.isArray(response.data)) {
        setTodos(response.data);
      } else {
        console.error("API response is not an array:", response.data);
      }
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };

  const addTodo = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/todos",
        newTodo,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setTodos([...todos, response.data]);
      setNewTodo({ title: "", description: "", targetDate: "" });
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  };

  const updateTodo = async (id, isdone) => {
    try {
      const response = await axios.put(
        `http://localhost:3000/api/todos/${id}`,
        { isdone },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setTodos(
        todos.map((todo) => (todo._id === id ? { ...todo, isdone } : todo))
      );
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/todos/${id}`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setTodos(todos.filter((todo) => todo._id !== id));
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <div>
        <input
          type="text"
          placeholder="Title"
          value={newTodo.title}
          onChange={(e) => setNewTodo({ ...newTodo, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Description"
          value={newTodo.description}
          onChange={(e) =>
            setNewTodo({ ...newTodo, description: e.target.value })
          }
        />
        <input
          type="date"
          value={newTodo.targetDate}
          onChange={(e) =>
            setNewTodo({ ...newTodo, targetDate: e.target.value })
          }
        />
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <ul>
        {todos?.map((todo) => (
          <li key={todo._id}>
            <span>{todo.title}</span>
            <span>{todo.description}</span>
            <span>{todo.targetDate}</span>
            <span>{todo.isdone ? "Completed" : "Not Completed"}</span>
            <button onClick={() => updateTodo(todo._id, !todo.isdone)}>
              {todo.isdone ? "Undo" : "Complete"}
            </button>
            <button onClick={() => deleteTodo(todo._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
