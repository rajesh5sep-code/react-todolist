
import React, { useState, useEffect } from "react";
import './App.css';
import TodoForm from "./components/TodoForm";
import TodoList from './components/TodoList';
import Typography from '@material-ui/core/Typography'
const LOCAL_STORAGE_KEY = "react-todo-list-todos";

function App() {

  const [todos, setToDos] = useState([]);

  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storageTodos) {
      setToDos(storageTodos);
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  function addToDo(todo) {
    setToDos([todo, ...todos]);
  }

  function removeTodo(id) {
    setToDos(todos => todos.filter(todo => todo.id !== id));
  }

  function toggleComplete(id) {
    setToDos(
      todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          }
        }
        return todo;
      })
    )
  }

  return (
    <div className="App">
      <Typography style={{ padding: 16 }} variant="h1" >    React Todo   </Typography>

      <TodoForm addToDo={addToDo} />
      <TodoList todos={todos} toggleComplete={toggleComplete} removeTodo={removeTodo} />



    </div>
  );
}

export default App;
