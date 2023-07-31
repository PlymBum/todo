import React, { Component } from 'react'
import './App.css'
import { formatDistanceToNow } from 'date-fns'

import Footer from './components/Footer'
import NewTaskForm from './components/NewTaskForm'
import TaskList from './components/TaskList'

export default class App extends Component {
  maxId = 300

  constructor(props) {
    super(props)
    this.state = {
      filter: 'ALL',
      tasks: [
        this.createTask('Learn WebCore', new Date(2023, 3, 22), 'completed', true),
        this.createTask('Learn JSCore', new Date(2023, 5, 22), 'completed', true),
        this.createTask('Learn React', new Date(2023, 6, 22), 'active'),
      ],
    }
  }

  onChangeTask = (id, description) => {
    const { tasks: tasksArr } = this.state
    const idx = tasksArr.findIndex((el) => el.id === id)
    const editingTask = { ...tasksArr[idx] }
    this.setState(({ tasks }) => {
      const newArr = [
        ...tasks.slice(0, idx),
        { ...editingTask, description, status: 'active' },
        ...tasks.slice(idx + 1),
      ]

      return {
        tasks: newArr,
      }
    })
  }

  removeTask = (id) => {
    this.setState((state) => {
      const newTasks = state.tasks.filter((el) => el.id !== id)
      console.log('ad')
      return {
        tasks: newTasks,
      }
    })
  }

  addTask = (text, date) => {
    const newTask = this.createTask(text, date)
    this.setState(({ tasks }) => {
      return {
        tasks: [...tasks, newTask],
      }
    })
  }

  onToogleCompleted = (id) => {
    const { tasks: tasksArr } = this.state

    const idx = tasksArr.findIndex((el) => el.id === id)
    const editingTask = { ...tasksArr[idx] }
    const isCompleted = editingTask.completed
    let newArr
    if (isCompleted) {
      editingTask.completed = false
      editingTask.status = 'active'
    } else {
      editingTask.completed = true
      editingTask.status = 'completed'
    }
    this.setState(({ tasks }) => {
      newArr = [...tasks.slice(0, idx), { ...editingTask }, ...tasks.slice(idx + 1)]
      return {
        tasks: newArr,
      }
    })
  }

  onToogleStatus = (id, status) => {
    const { tasks: tasksArr } = this.state
    const idx = tasksArr.findIndex((el) => el.id === id)
    const editingTask = { ...tasksArr[idx] }
    this.setState(({ tasks }) => {
      const newArr = [...tasks.slice(0, idx), { ...editingTask, status }, ...tasks.slice(idx + 1)]
      return {
        tasks: newArr,
      }
    })
  }

  // toogleTaskAttribute = (arr, id, attributeName) => {
  //   const idx = arr.findIndex((el) => el.id === id)
  //   const editingTask = { ...arr[idx] }
  //   this.setState(({ tasks }) => {
  //     const newArr = [
  //       ...tasks.slice(0, idx),
  //       { ...editingTask, [attributeName]: !tasks[idx][attributeName] },
  //       ...tasks.slice(idx + 1),
  //     ]
  //     return {
  //       tasks: newArr,
  //     }
  //   })
  // }

  onChangeFilter = (filterName) => {
    this.setState({
      filter: filterName,
    })
  }

  onDeleteCompleted = () => {
    this.setState((state) => {
      const newTasks = state.tasks.filter((el) => el.completed === false)
      return {
        tasks: newTasks,
      }
    })
  }

  activeTasksCount = () => {
    const { tasks } = this.state
    return tasks.filter((el) => el.completed === false).length
  }

  createTask(description, date, status = 'active', completed = false) {
    return {
      description,
      created: formatDistanceToNow(date, { addSuffix: true }),
      id: this.maxId++,
      status,
      completed,
    }
  }

  render() {
    const { tasks, filter } = this.state
    const {
      addTask,
      removeTask,
      onToogleCompleted,
      onChangeFilter,
      onDeleteCompleted,
      activeTasksCount,
      onToogleStatus,
      onChangeTask,
    } = this
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
}
