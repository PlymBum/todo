import React from 'react'
import PropTypes from 'prop-types'

import './TaskList.css'
import Task from '../Task/Task'

function TaskList({ tasks, removeTask, onToogleCompleted, filter, onChangeTask, onToogleStatus, updateTimer }) {
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
                minute={el.minute}
                second={el.second}
                updateTimer={updateTimer}
              />
            )
          })}
      </ul>
    </section>
  )
}
TaskList.defaultProps = {
  tasks: [],
  filter: 'ALL',
  onChangeTask: () => {},
  onToogleStatus: () => {},
  removeTask: () => {},
  onToogleCompleted: () => {},
}

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.shape({
        description: PropTypes.string,
        created: PropTypes.string,
        completed: PropTypes.boolean,
        status: PropTypes.string,
        id: PropTypes.number,
        key: PropTypes.number,
      })
    )
  ),
  filter: PropTypes.oneOf(['ALL', 'ACTIVE', 'COMPLETED']),
  onChangeTask: PropTypes.func,
  onToogleStatus: PropTypes.func,
  removeTask: PropTypes.func,
  onToogleCompleted: PropTypes.func,
}
export default TaskList
