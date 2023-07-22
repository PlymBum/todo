import React from "react";
import './TaskList.css'
import Task from "../Task/Task";


const TaskList = ({tasks,removeTask}) =>{
return (
    <section className="main">
        <ul className="todo-list">
            {tasks.map(el=>{
                 return (
                  <Task status={el.status}
                        description={el.description}
                        created={el.created}
                        key={el.id}
                        removeTask={()=>removeTask(el.id)}/>
                 ) 
            })}
        </ul>
      </section>
)
}

export default TaskList;