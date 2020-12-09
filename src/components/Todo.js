
import React from "react";
import {IconButton,ListItem,Typography}  from  "@material-ui/core";  
import CloseIcon from "@material-ui/icons/Close";
import Checkbox from '@material-ui/core/Checkbox';




function Todo({ todo, toggleComplete,removeTodo }) {


    function handleCheckBox() {
        toggleComplete(todo.id);
    }

    return (
        <ListItem style={{ display: "flex" }}>
            <Checkbox checked={todo.completed} onClick={handleCheckBox} />
            <Typography
                variant="body1"
                style={{
                    textDecoration: todo.completed ? "line-through" : null
                }}>{todo.task}
            </Typography>
            <IconButton onClick={() => removeTodo(todo.id)}><CloseIcon/></IconButton>
        </ListItem>
    )
}

export default Todo;
