import React from 'react'

import './ViewTask.css'
import Timer from '../Timer/Timer'

export default function ViewTask({
  id,
  completed,
  onToogleCompleted,
  description,
  created,
  onToogleStatus,
  removeTask,
  second,
  updateTimer,
}) {
  return (
    <div className="view">
      <input className="toggle" type="checkbox" checked={completed} onChange={onToogleCompleted} />
      <label>
        <span className="description">{description}</span>
        {!completed ? <Timer second={second} updateTimer={updateTimer} id={id} /> : null}
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
