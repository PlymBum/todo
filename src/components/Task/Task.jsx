import React from 'react'

import ViewTask from '../ViewTask'
import './Task.css'
import EditingTask from '../EditingTask/EditingTask'

export default function Task({
  task,
  onChangeTask,
  onToogleStatus,
  removeTask,
  onToogleCompleted,
  updateTimer,
  second,
  toogleEnable,
  isEnable,
  timerStartTime,
}) {
  const { description, created, completed, status, id } = task

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
          second={second}
          updateTimer={updateTimer}
          toogleEnable={toogleEnable}
          isEnable={isEnable}
          timerStartTime={timerStartTime}
        />
      ) : (
        <EditingTask description={description} onChangeTask={onChangeTask} id={id} onToogleStatus={onToogleStatus} />
      )}
    </li>
  )
}
