import React from 'react'
import PropTypes from 'prop-types'

import './TaskList.css'
import Task from '../Task/Task'

function TaskList({ tasks, removeTask, onToogleCompleted, filter, onChangeTask, onToogleStatus }) {
  
  return (
    <section className="main">
      <ul className="todo-list">
        {tasks
          .filter((el) => {
            if (filter === 'ACTIVE') {
              return el.completed === false
            }
            if (filter === 'COMPLETED') {
              return el.completed === true
            }
            return el
          })
          .map((el) => {
            return (
              <Task
                task={el}
                key={el.id}
                removeTask={() => removeTask(el.id)}
                onToogleCompleted={() => onToogleCompleted(el.id)}
                onChangeTask = {onChangeTask}
                onToogleStatus={onToogleStatus}
                completed = {el.completed}
              />
            )
          })}
      </ul>
    </section>
  )
}
export default TaskList
