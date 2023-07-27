import React from 'react'
import PropTypes from 'prop-types'

import './Footer.css'
import TasksFilter from '../TasksFilter'

function Footer({ filter, onChangeFilter, onDeleteCompleted, activeTasks }) {
  return (
    <footer className="footer">
      <span className="todo-count">{activeTasks} items left</span>
      <TasksFilter filter={filter} onChangeFilter={onChangeFilter} />
      <button type="button" className="clear-completed" onClick={onDeleteCompleted}>
        Clear completed
      </button>
    </footer>
  )
}

Footer.defaultProps = {
  filter: 'ALL',
  onChangeFilter: () => {
    console.log('функция onChangeFilter не задана')
  },
  onDeleteCompleted: () => {
    console.log('функция onDeleteCompleted не задана')
  },
  activeTasks: 'Неверное значение',
}

Footer.propTypes = {
  filter: PropTypes.string,
  onChangeFilter: PropTypes.func,
  onDeleteCompleted: PropTypes.func,
  activeTasks: PropTypes.number,
}

export default Footer
