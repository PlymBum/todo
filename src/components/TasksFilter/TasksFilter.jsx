import React from 'react'
import PropTypes from 'prop-types'
import './TasksFilter.css'

function TasksFilter({ filter, onChangeFilter }) {
  return (
    <ul className="filters">
      <li>
        <button
          type="button"
          className={filter === 'ALL' ? 'selected' : ''}
          aria-label="All"
          onClick={() => onChangeFilter('ALL')}
        >
          All
        </button>
      </li>
      <li>
        <button
          className={filter === 'ACTIVE' ? 'selected' : ''}
          type="button"
          aria-label="ACTIVE"
          onClick={() => onChangeFilter('ACTIVE')}
        >
          Active
        </button>
      </li>
      <li>
        <button
          className={filter === 'COMPLETED' ? 'selected' : ''}
          type="button"
          aria-label="COMPLETED"
          onClick={() => onChangeFilter('COMPLETED')}
        >
          Completed
        </button>
      </li>
    </ul>
  )
}

TasksFilter.defaultProps = {
  filter: 'ALL',
  onChangeFilter: () => {
    console.log('функция onChangeFilter не задана')
  },
}

TasksFilter.propsType = {
  filter: PropTypes.oneOf(['ALL', 'ACTIVE', 'COMPLETED']),
  onChangeFilter: PropTypes.func,
}

export default TasksFilter
