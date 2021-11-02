import React from "react";

import "../styles/Header.css"

const Header = ({handleTasks}) => {
    
    return(
        <header>
            <h1 className="logo">To Do List</h1>
            <div>
                <button onClick={(e) => handleTasks("All Tasks")}>All Tasks</button>
                <button onClick={(e) => handleTasks("Not Completed")}>Not Completed</button>
                <button onClick={(e) => handleTasks("Completed")}>Completed</button>
            </div>
        </header>
    );
};

export default Header