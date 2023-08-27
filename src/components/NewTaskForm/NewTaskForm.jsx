import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './NewTaskForm.css'

export default class NewTaskForm extends Component {
  static defaultProps = {
    addTask: () => {},
  }

  static propTypes = {
    addTask: PropTypes.func,
  }

  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
      minute: '',
      second: '',
    }
  }

  onChangeInputDescription = (e) => {
    this.setState({
      inputValue: e.target.value,
    })
  }

  onChangeInputMinute = (e) => {
    const minutValue = this.validateTime(e.target.value, 0, 59)

    this.setState({
      minute: minutValue,
    })
  }

  onChangeInputSecond = (e) => {
    const secondValue = this.validateTime(e.target.value, 0, 59)

    this.setState({
      second: secondValue,
    })
  }

  validateTime = (value, min, max) => {
    if (value > max) {
      return max
    }
    if (value < 0) {
      return min
    }
    return +value
  }

  onCatchKeyDown = (e) => {
    const { addTask } = this.props
    const { inputValue, minute, second } = this.state
    if (e.keyCode === 13) {
      addTask(inputValue, Date.now(), minute, second)
      this.setState({
        inputValue: '',
        minute: '',
        second: '',
      })
    }
    if (e.keyCode === 27) {
      this.setState({
        inputValue: '',
        minute: '',
        second: '',
      })
    }
  }

  render() {
    const { inputValue, minute, second } = this.state

    return (
      <header className="header">
        <h1>todos</h1>
        <form className="new-todo-form">
          <input
            name="description"
            className="new-todo"
            placeholder="What needs to be done?"
            onChange={this.onChangeInputDescription}
            value={inputValue}
            onKeyDown={this.onCatchKeyDown}
          />
          <input
            name="minute"
            className="new-todo-form__timer"
            placeholder="Min"
            value={minute}
            onChange={this.onChangeInputMinute}
            type="number"
            onKeyDown={this.onCatchKeyDown}
          />
          <input
            name="second"
            className="new-todo-form__timer"
            placeholder="Sec"
            value={second}
            onChange={this.onChangeInputSecond}
            type="number"
            onKeyDown={this.onCatchKeyDown}
          />
        </form>
      </header>
    )
  }
}
