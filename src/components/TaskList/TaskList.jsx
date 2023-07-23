import React from "react";
import PropTypes from 'prop-types';
import './TaskList.css'
import Task from "../Task/Task";


const TaskList = ({tasks,removeTask,onToogleCompleted,onToogleIsEdit,filter}) =>{
return (
    <section className="main">
        <ul className="todo-list">
            {
                tasks.filter(el=>{
                    if(filter==="ACTIVE"){
                        return el.completed===false
                    }else if((filter==="COMPLETED")){
                        return el.completed===true
                    }else return el
                }).map(el=>{
                 return (
                  <Task status={el.status}
                        description={el.description}
                        created={el.created}
                        isEdit = {el.isEdit}
                        completed = {el.completed}
                        key={el.id}
                        removeTask={()=>removeTask(el.id)}
                        onToogleCompleted={()=>onToogleCompleted(el.id)}
                        onToogleIsEdit={()=>onToogleIsEdit(el.id)}/>
                 ) 
            })}
        </ul>
      </section>
)
}

TaskList.propTypes={
    tasks: PropTypes.array,
    removeTask: PropTypes.func,
    onToogleCompleted: PropTypes.func,
    onToogleIsEdit: PropTypes.func,
    filter: PropTypes.oneOf(['ALL', 'ACTIVE','COMPLETED'])
}

export default TaskList;