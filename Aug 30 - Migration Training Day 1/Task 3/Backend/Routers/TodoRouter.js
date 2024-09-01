import Express from "express";
import Todo from "../Models/TodoSchema.js";

const router = Express.Router();

router.get("/todos", async (req, res) => {
  try {
    const todos = await Todo.find();
    res.send(todos);
  } catch (error) {
    res.send(error);
  }
});

router.post("/todos", async (req, res) => {
  try {
    const todo = new Todo({
      title: req.body.title,
      description: req.body.description,
      targetDate: req.body.targetDate,
    });
    const savedTodo = await todo.save();
    res.send(savedTodo);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.put("/todos/:id", async (req, res) => {
    try {
        const updatedTodo = await Todo.updateOne(
        { _id: req.params.id },
        { $set: { isdone: req.body.isdone } }
        );
        res.send(updatedTodo);
    } catch (error) {
        res.send(error);
    }
    }
);

router.delete("/todos/:id", async (req, res) => {
    try {
        const deletedTodo = await Todo.deleteOne({ _id: req.params.id });
        res.send(deletedTodo);
    } catch (error)
    {
        res
        .status(404)
        .send({ message: "Todo not found" });
    }
    }
);

export default router;
