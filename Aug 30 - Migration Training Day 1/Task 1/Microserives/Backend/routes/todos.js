const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

// Define Todo schema
const TodoSchema = new mongoose.Schema({
  title: String,
  completed: Boolean,
});

const Todo = mongoose.model("Todo", TodoSchema);

// GET all todos
router.get("/", async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
});

// POST a new todo
router.post("/", async (req, res) => {
  const newTodo = new Todo({
    title: req.body.title,
    completed: req.body.completed,
  });
  const savedTodo = await newTodo.save();
  res.json(savedTodo);
});

module.exports = router;
