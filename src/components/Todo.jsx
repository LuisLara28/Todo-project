import React from "react";

//STYLES
import "../styles/Todo.css"

const Todo = ({ title, status, handleCompleteTodo, id }) => {
    return(
        
        <div className="todo-card">
            
            <div className="todo-title">
                <h4>{title}</h4>
            </div>

            <div className="todo-actions">
                <button className={status ? "complete" : "reset"} onClick={() => handleCompleteTodo(id)}>
                    {status ? "Not Completed" : "Complete" }
                </button>
                
            </div>

        </div>
    )
}

export default Todo