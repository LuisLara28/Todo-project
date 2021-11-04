import React, { useState, useEffect} from "react";

//COMPONENTS
import Header from "./components/Header"
import Loader from "./components/Loader";
import Todo from "./components/Todo";


//STYLES
import "./styles/App.css"

function App() {
  //STATE
  const [todoList, setTodoList] = useState(null)
  const [copyTodo, setCopyTodo] = useState([])


  //EFFECT
  useEffect(() => {
    const handleTodoList = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
        );
      const result = await response.json();
      const resultTodoList = result.slice(0,12);
      setTodoList(resultTodoList)
      setCopyTodo(resultTodoList)
    }; 
    
    handleTodoList();
    
    
  }, []);
  
  // useEffect(() => {
  //   handleTasks()
  //   handleCompleteTodo()
  // },[])


  //FUNCIONES
  const handleCompleteTodo = (id) => {
    setTodoList(
      todoList.map(todo => 
        todo.id === id ? {...todo, completed: !todo.completed} : todo 
      )
    );
    
    setCopyTodo(
      copyTodo.map(todo => 
        todo.id === id ? {...todo, completed: !todo.completed} : todo 
      )
    );
  }

  const handleTasks = (e) => {
    console.log(e)
    if(e === "All Tasks"){
      setTodoList(copyTodo.filter(todo => todo))
    }else if( e === "Not Completed"){
      setTodoList(copyTodo.filter(todo => todo.completed))
    }else if( e === "Completed"){
      setTodoList(copyTodo.filter(todo => !todo.completed))
    }
  }

  return (
    <div className="App">
      <Header handleTasks={handleTasks}/>

      <div className="todo-container">
        
      {todoList && todoList.length > 0 ? (
        todoList.map(singleTodo => (
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
