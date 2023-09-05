import React from 'react'

import './TaskList.css'
import Task from '../Task/Task'

export default function TaskList({
  tasks,
  removeTask,
  onToogleCompleted,
  filter,
  onChangeTask,
  onToogleStatus,
  updateTimer,
  toogleEnable,
}) {
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
                onChangeTask={onChangeTask}
                onToogleStatus={onToogleStatus}
                completed={el.completed}
                second={el.second}
                updateTimer={updateTimer}
                toogleEnable={toogleEnable}
                isEnable={el.isEnable}
                timerStartTime={el.timerStartTime}
              />
            )
          })}
      </ul>
    </section>
  )
}
