import React from 'react'
import PropTypes from 'prop-types'

import './TaskList.css'
import Task from '../Task/Task'

function TaskList({ tasks, removeTask, onToogleCompleted, onToogleIsEdit, filter, changeDescription, onToogleStatus }) {
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
                status={el.status}
                description={el.description}
                created={el.created}
                isEdit={el.isEdit}
                completed={el.completed}
                key={el.id}
                id={el.id}
                removeTask={() => removeTask(el.id)}
                onToogleCompleted={() => onToogleCompleted(el.id)}
                onToogleIsEdit={() => onToogleIsEdit(el.id)}
                changeDescription={changeDescription}
                onToogleStatus={onToogleStatus}
              />
            )
          })}
      </ul>
    </section>
  )
}

TaskList.defaultProps = {
  removeTask: () => console.log('Функция removeTask не задана'),
  onToogleCompleted: () => {
    console.log('функция onToogleCompleted не задана')
  },
  onToogleIsEdit: () => {
    console.log('функция onToogleIsEdit не задана')
  },
  filter: 'ALL',
  tasks: [
    {
      description: 'Не задано',
      created: 'Неизвестно',
      id: -100,
      completed: false,
      isEdit: false,
    },
  ],
}

TaskList.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  tasks: PropTypes.array,
  removeTask: PropTypes.func,
  onToogleCompleted: PropTypes.func,
  onToogleIsEdit: PropTypes.func,
  filter: PropTypes.oneOf(['ALL', 'ACTIVE', 'COMPLETED']),
}

export default TaskList
