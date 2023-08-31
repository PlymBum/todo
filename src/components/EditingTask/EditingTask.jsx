import React, { useState } from 'react'
import './EditingTask.css'

export default function EditingTask({ description, onChangeTask, id }) {
  const [value, setValue] = useState(description)

  const editValue = (e) => {
    const newValue = e.target.value
    setValue(newValue)
  }

  const closeEditing = (e, tsakId) => {
    if (e.keyCode === 27) {
      onChangeTask(tsakId, description)
    }
  }

  const setDescription = (e, tsakId, newDesk) => {
    e.preventDefault()

    if (newDesk === '' || newDesk.trim() === '') {
      onChangeTask(tsakId, description)
    } else onChangeTask(tsakId, newDesk)
  }

  return (
    <form onSubmit={(e) => setDescription(e, id, value)}>
      <input type="text" className="edit" value={value} onChange={editValue} onKeyDown={(e) => closeEditing(e, id)} />
    </form>
  )
}
