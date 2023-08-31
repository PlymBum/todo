import React, { useState } from 'react'
import './NewTaskForm.css'

export default function NewTaskForm({ addTask }) {
  const [inputValue, setInputValue] = useState('')
  const [time, setTime] = useState({ minute: '', second: '' })

  const onChangeInputDescription = (e) => {
    setInputValue(e.target.value)
  }
  const validateTime = (value, min, max) => {
    if (value > max) {
      return max
    }
    if (value < 0) {
      return min
    }
    return +value
  }
  const convertToSecond = (min, sec) => {
    return min * 60 + sec
  }
  const onChangeInputMinute = (e) => {
    const minutValue = validateTime(e.target.value, 0, 59)
    setTime((prev) => ({ ...prev, minute: minutValue }))
  }

  const onChangeInputSecond = (e) => {
    const secondValue = validateTime(e.target.value, 0, 59)
    setTime((prev) => ({ ...prev, second: secondValue }))
  }
  const onCatchKeyDown = (e) => {
    const { minute, second } = time
    if (e.keyCode === 13) {
      addTask(inputValue, Date.now(), convertToSecond(minute, second))
      setTime({ minute: '', second: '' })
      setInputValue('')
    }
    if (e.keyCode === 27) {
      setTime({ minute: '', second: '' })
      setInputValue('')
    }
  }

  const { minute, second } = time

  return (
    <header className="header">
      <h1>todos</h1>
      <form className="new-todo-form">
        <input
          name="description"
          className="new-todo"
          placeholder="What needs to be done?"
          onChange={onChangeInputDescription}
          value={inputValue}
          onKeyDown={onCatchKeyDown}
        />
        <input
          name="minute"
          className="new-todo-form__timer"
          placeholder="Min"
          value={minute}
          onChange={onChangeInputMinute}
          type="number"
          onKeyDown={onCatchKeyDown}
        />
        <input
          name="second"
          className="new-todo-form__timer"
          placeholder="Sec"
          value={second}
          onChange={onChangeInputSecond}
          type="number"
          onKeyDown={onCatchKeyDown}
        />
      </form>
    </header>
  )
}
