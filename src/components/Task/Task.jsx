import React from 'react'
import PropTypes from 'prop-types'

import ViewTask from '../ViewTask'
import './Task.css'
import EditingTask from '../EditingTask/EditingTask'

function Task({ task, onChangeTask, onToogleStatus, removeTask, onToogleCompleted, updateTimer, minute, second }) {
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
          minute={minute}
          second={second}
          updateTimer={updateTimer}
        />
      ) : (
        <EditingTask description={description} onChangeTask={onChangeTask} id={id} onToogleStatus={onToogleStatus} />
      )}
    </li>
  )
}

Task.defaultProps = {
  task: {
    description: 'нет описания',
    created: 'неизвестно',
    completed: false,
    status: 'active',
    id: null,
    key: null,
  },
  onChangeTask: () => {},
  onToogleStatus: () => {},
  removeTask: () => {},
  onToogleCompleted: () => {},
}

Task.propTypes = {
  task: PropTypes.objectOf(
    PropTypes.shape({
      description: PropTypes.string,
      created: PropTypes.string,
      completed: PropTypes.boolean,
      status: PropTypes.string,
      id: PropTypes.number,
      key: PropTypes.number,
    })
  ),
  onChangeTask: PropTypes.func,
  onToogleStatus: PropTypes.func,
  removeTask: PropTypes.func,
  onToogleCompleted: PropTypes.func,
}

export default Task
