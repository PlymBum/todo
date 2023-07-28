import React from 'react'

import ViewTask from '../ViewTask'
import './Task.css'
import EditingTask from '../EditingTask/EditingTask'

function Task({ task, onChangeTask, onToogleStatus, removeTask, onToogleCompleted}) {
  const { description, created, completed, status,  id } = task

  
  return (
    <li className={status}>
      {status !== 'editing' ? (
        <ViewTask
          description={description}
          created={created}
          completed={completed}
          removeTask={removeTask}
          onToogleCompleted={onToogleCompleted}
          status={status}
          onToogleStatus={onToogleStatus}
          id={id}
          key={id}
        />
      ) : (
        <EditingTask description={description} onChangeTask={onChangeTask} id={id} onToogleStatus={onToogleStatus}/>
      )}
    </li>
  )
}

export default Task
