"use client"
import React, { useEffect, useState } from "react";

const Home = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/Todos");
      const data = await res.json();
      setTodos(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Todos List</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
