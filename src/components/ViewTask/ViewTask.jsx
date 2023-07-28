import React from 'react'
import './ViewTask.css'

function ViewTask({ id, completed, onToogleCompleted, description, created, onToogleStatus, removeTask, status }) {
  return (
    <div className="view">
      <input className="toggle" type="checkbox" checked={completed} onChange={onToogleCompleted} />
      <label>
        <span className="description">{description}</span>
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

export default ViewTask
