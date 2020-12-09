import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Button, TextField } from "@material-ui/core";

function TodoForm({ addToDo }) {
    const [todo, setTodo] = useState({
        id: "",
        task: "",
        completed: false
    });

    function handleTaskInputChange(event) {

        setTodo({
            ...todo,
            task: event.target.value
        })
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (todo.task.trim()) {
            addToDo({
                ...todo,
                id: uuidv4()
            });

            setTodo({
                ...todo,
                task: ""
            });
        }
    }

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <TextField
                label="task"
                name="task"
                type="text"
                value={todo.task}
                onChange={handleTaskInputChange}
            />
            <Button type="submit">Submit</Button>
        </form>
    );
}

export default TodoForm;