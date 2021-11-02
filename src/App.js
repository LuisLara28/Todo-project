import React, { useState, useEffect} from "react";

//COMPONENTS
import Header from "./components/Header"
import Loader from "./components/Loader";
import Todo from "./components/Todo";


//STYLES
import "./styles/App.css"

function App() {
  //STATE
  const [todoList, setTodoList] = useState([])
  const [copyTodoList, setCopyTodoList] = useState([])

  //EFFECT
  useEffect(() => {
    const handleTodoList = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
        );
      const result = await response.json();
      const resultTodoList = result.slice(0,10);
      setTodoList(resultTodoList)
      setCopyTodoList(resultTodoList)
    }; 
    
    handleTodoList();
    
    
  }, []);

  //FUNCIONES
  const handleCompleteTodo = (id) => {
    setCopyTodoList(
      todoList.map(todo => 
        todo.id === id ? {...todo, completed: !todo.completed} : todo 
      )
    );
  }

  const handleTasks = (e) => {
    console.log(e)
    if(e === "All Tasks"){
      setCopyTodoList(todoList)
    }else if( e === "Not Completed"){
      setCopyTodoList(todoList.filter(todo => todo.completed))
    }else if( e === "Completed"){
      setCopyTodoList(todoList.filter(todo => !todo.completed))
    }
  }

  return (
    <div className="App">
      <Header handleTasks={handleTasks}/>

      <div className="todo-container">
        
      {copyTodoList && copyTodoList.length > 0 ? (
        copyTodoList.map(singleTodo => (
          <Todo 
          key={singleTodo.id} 
          title={singleTodo.title} 
          status={singleTodo.completed}
          handleCompleteTodo={handleCompleteTodo}
          id={singleTodo.id}
          />
        ))
      ) : (
        <Loader/>
      )}
      </div>
    </div>
  );
}

export default App;
