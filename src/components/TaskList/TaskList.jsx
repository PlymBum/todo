import React from "react";
import './TaskList.css'
import Task from "../Task/Task";


const TaskList = () =>{
return (
    <section className="main">
        <ul className="todo-list">
          <Task status={'completed'} 
                description={'Completed task'}
                created={'created 17 seconds ago'}/>
          <Task status={'editing'} 
                description={'Editing task'}
                created={'created 5 minutes ago'}/>
          <Task status={''} 
                description={'Active task'}
                created={'created 5 minutes ago'}/>
        </ul>
      </section>
)
}

export default TaskList;