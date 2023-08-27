import React from 'react'
import PropTypes from 'prop-types'

import './ViewTask.css'
import Timer from '../Timer/Timer'

function ViewTask({
  id,
  completed,
  onToogleCompleted,
  description,
  created,
  onToogleStatus,
  removeTask,
  minute,
  second,
  updateTimer,
}) {
  return (
    <div className="view">
      <input className="toggle" type="checkbox" checked={completed} onChange={onToogleCompleted} />
      <label>
        <span className="description">{description}</span>
        {!completed ? <Timer minute={minute} second={second} updateTimer={updateTimer} id={id} /> : null}
        <span className="created">{created}</span>
      </label>
      <button
        disabled={completed}
        type="button"
        aria-label="Edit"
        className={`icon icon-edit ${completed ? 'disabled' : ''}`}
        onClick={() => onToogleStatus(id, 'editing')}
      />
      <button type="button" aria-label="Remove" className="icon icon-destroy" onClick={removeTask} />
    </div>
  )
}

ViewTask.defaultProps = {
  description: 'нет описания',
  created: 'неизвестно',
  completed: false,
  id: null,
  onToogleCompleted: () => {},
  onToogleStatus: () => {},
  removeTask: () => {},
}

ViewTask.propsType = {
  description: PropTypes.string,
  created: PropTypes.string,
  completed: PropTypes.boolean,
  id: PropTypes.number,
  onToogleCompleted: PropTypes.func,
  onToogleStatus: PropTypes.func,
  removeTask: PropTypes.func,
}

export default ViewTask
