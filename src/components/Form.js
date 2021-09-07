import React from 'react';

function Form ({setTextInput, textInput,setTodos,todos,setFilterTodos}){
  
  const inputTextHandler=(e)=>{
    setTextInput(e.target.value);
  }
  const submitTodoHandler=(e)=>{
      e.preventDefault();
      setTodos([...todos,{text: textInput,completed:false, id:Math.round(Math.random()*1000)}]);
      setTextInput("");
  }

  const filterTodoHandler=(e)=>{
      setFilterTodos(e.target.value)
  }
    return (
        <form >
            <input 
            type="text" 
            className="todo-input" 
            onChange={inputTextHandler}
            value={textInput}
            />
            <button type="submit" className="todo-button" onClick={submitTodoHandler}>
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select onChange={filterTodoHandler} name="todo" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
}
export default Form;