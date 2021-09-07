import React, { useState, useEffect } from "react";
import "semantic-ui-css/semantic.min.css";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import RadioExampleToggle from "./components/Radio";

function App() {
  const [textInput, setTextInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [darkMode, setDarkMode] =useState(false);
  const [filterTodos, setFilterTodos] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

 

  useEffect(() => {
    getTodosFromLocal();
  }, []);

  useEffect(() => {
    saveTodosToLocal();
    filteredTodoHandler();
  }, [todos, filterTodos,darkMode]);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  const filteredTodoHandler = () => {
    switch (filterTodos) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
    }
  };
  
  const saveTodosToLocal = () => {
    localStorage.setItem("darkmode", JSON.stringify(darkMode));
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  const getTodosFromLocal = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let localTodo = JSON.parse(localStorage.getItem("todos"));
      let darkmode = JSON.parse(localStorage.getItem("darkmode"));
      setTodos(localTodo);
      setDarkMode(darkmode);
    }
  };
  return (
    <div className="App">
      <RadioExampleToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      <header>
        <h1>My Todo List</h1>
      </header>
      <Form
        setFilterTodos={setFilterTodos}
        setTextInput={setTextInput}
        textInput={textInput}
        setTodos={setTodos}
        todos={todos}
      />
      <TodoList
        filteredTodos={filteredTodos}
        setTodos={setTodos}
        todos={todos}
      />
    </div>
  );
}

export default App;
