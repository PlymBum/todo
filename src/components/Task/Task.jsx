import React from "react";
import "./Task.css"

const Task = ({status,description,created}) =>{

    return(
        <li className={status}>
        <div className="view">
          <input className="toggle" type="checkbox"/>
          <label>
            <span className="description">{description}</span>
            <span className="created">{created}</span>
          </label>
          <button className="icon icon-edit"></button>
          <button className="icon icon-destroy"></button>
        </div>
        {status==='editing'?
            <input type="text" class="edit" value="Editing task"></input>:""
        } 
      </li>
    )
}

export default Task;