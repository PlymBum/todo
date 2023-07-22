import React from "react";
import "./Footer.css"
import TasksFilter from "../TasksFilter";

 const Footer = ({filter,onChangeFilter,onDeleteCompleted,activeTasks}) =>{
    return(
        <footer className="footer">
        <span className="todo-count">{activeTasks} items left</span>
        <TasksFilter filter={filter} onChangeFilter={onChangeFilter}/>
        <button className="clear-completed" onClick={onDeleteCompleted}>Clear completed</button>
      </footer>
    )
};

export default Footer;