import React, { useState } from 'react'
import './App.css'
import { formatDistanceToNow } from 'date-fns'

import Footer from './components/Footer'
import NewTaskForm from './components/NewTaskForm'
import TaskList from './components/TaskList'

export default function App() {
  const createTask = (description, date, second = 0, status = 'active', completed = false) => {
    return {
      description,
      created: formatDistanceToNow(date, { addSuffix: true }),
      id: Math.random().toFixed(5) * 100000,
      status,
      completed,
      second,
    }
  }
  const initialState = [
    createTask('Learn WebCore', new Date(2023, 3, 22), 0, 'completed', true),
    createTask('Learn JSCore', new Date(2023, 5, 22), 0, 'completed', true),
    createTask('Learn React', new Date(2023, 6, 22), 0, 'active'),
  ]
  const [tasks, setTasks] = useState(initialState)
  const [filter, setfilter] = useState('ALL')

  const onChangeTask = (id, description) => {
    const idx = tasks.findIndex((el) => el.id === id)
    const editingTask = { ...tasks[idx] }
    const newTasks = [
      ...tasks.slice(0, idx),
      { ...editingTask, description, status: 'active' },
      ...tasks.slice(idx + 1),
    ]
    setTasks(newTasks)
  }

  const removeTask = (id) => {
    const newTasks = tasks.filter((el) => el.id !== id)
    setTasks(newTasks)
  }

  const addTask = (text, date, minute, second) => {
    const newTask = createTask(text, date, minute, second)
    setTasks((prev) => {
      return [...prev, newTask]
    })
  }

  const onToogleCompleted = (id) => {
    const idx = tasks.findIndex((el) => el.id === id)
    const editingTask = { ...tasks[idx] }
    const isCompleted = editingTask.completed

    if (isCompleted) {
      editingTask.completed = false
      editingTask.status = 'active'
    } else {
      editingTask.completed = true
      editingTask.status = 'completed'
    }
    const newArr = [...tasks.slice(0, idx), { ...editingTask }, ...tasks.slice(idx + 1)]
    setTasks(newArr)
  }

  const onToogleStatus = (id, status) => {
    const idx = tasks.findIndex((el) => el.id === id)
    const editingTask = { ...tasks[idx] }
    const newArr = [...tasks.slice(0, idx), { ...editingTask, status }, ...tasks.slice(idx + 1)]
    setTasks(newArr)
  }

  const onChangeFilter = (filterName) => {
    setfilter(filterName)
  }

  const onDeleteCompleted = () => {
    const newTasks = tasks.filter((el) => el.completed === false)
    setTasks(newTasks)
  }

  const activeTasksCount = () => {
    return tasks.filter((el) => el.completed === false).length
  }

  const updateTimer = (id, second) => {
    const idx = tasks.findIndex((el) => el.id === id)
    const editingTask = { ...tasks[idx] }
    const newArr = [...tasks.slice(0, idx), { ...editingTask, second }, ...tasks.slice(idx + 1)]
    console.log(second)
    setTasks(newArr)
  }

  return (
    <section className="todoapp">
      <NewTaskForm addTask={addTask} />
      <TaskList
        tasks={tasks}
        filter={filter}
        removeTask={removeTask}
        onToogleCompleted={onToogleCompleted}
        onToogleStatus={onToogleStatus}
        onChangeTask={onChangeTask}
        updateTimer={updateTimer}
      />
      <Footer
        filter={filter}
        onChangeFilter={onChangeFilter}
        onDeleteCompleted={onDeleteCompleted}
        activeTasks={activeTasksCount()}
      />
    </section>
  )
}
