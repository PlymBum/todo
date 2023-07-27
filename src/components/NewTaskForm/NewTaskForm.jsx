import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './NewTaskForm.css'

export default class NewTaskForm extends Component {
  static defaultProps = {
    addTask: () => {
      console.log('функция addTask не задана')
    },
  }

  static propTypes = {
    addTask: PropTypes.func,
  }

  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
    }
  }

  onChangeInput = (e) => {
    this.setState({
      inputValue: e.target.value,
    })
  }

  onSubmit = (e) => {
    const { addTask } = this.props
    const { inputValue } = this.state
    e.preventDefault()
    addTask(inputValue, Date.now())
    this.setState({
      inputValue: '',
    })
  }

  render() {
    const { inputValue } = this.state

    return (
      <header className="header">
        <h1>todos</h1>
        <form onSubmit={this.onSubmit}>
          <input
            className="new-todo"
            placeholder="What needs to be done?"
            onChange={this.onChangeInput}
            value={inputValue}
          />
        </form>
      </header>
    )
  }
}
