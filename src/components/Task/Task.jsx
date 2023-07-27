/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Task.css'

export default class Task extends Component {
  static defaultProps = {
    description: 'Нет описания',
    created: 'Дата создания неизвестна',
    completed: false,
    isEdit: false,
    removeTask: () => console.log('функция removeTask не задана'),
    onToogleCompleted: () => {
      console.log('функция onToogleCompleted не задана')
    },
  }

  static propTypes = {
    description: PropTypes.string,
    created: PropTypes.string,
    completed: PropTypes.bool,
    isEdit: PropTypes.bool,
    removeTask: PropTypes.func,
    onToogleCompleted: PropTypes.func,
  }

  constructor(props) {
    super(props)
    this.state = {
      newValue: '',
    }
  }

  editTask = (e) => {
    this.setState({
      newValue: e.target.value,
    })
  }

  // eslint-disable-next-line class-methods-use-this
  changeTask = (e, id, text) => {
    const { changeDescription, onToogleStatus } = this.props
    e.preventDefault()
    changeDescription(id, text)
    onToogleStatus(id, 'active')
    // console.log(id, text)
  }

  // closeEditor = (event) => {
  //   if (event.key === 'Enter') {
  //     console.log('enter press here! ')
  //   }
  // }

  render() {
    const { newValue } = this.state
    const { editTask, changeTask } = this
    const { description, created, completed, isEdit, removeTask, onToogleCompleted, status, onToogleStatus, id } =
      this.props
    console.log(status)

    return (
      <li className={status}>
        <div className="view">
          <input className="toggle" type="checkbox" checked={completed} onChange={onToogleCompleted} />
          <label>
            <span className="description">{description}</span>
            <span className="created">{created}</span>
          </label>
          <button
            type="button"
            aria-label="Edit"
            className="icon icon-edit"
            onClick={() => onToogleStatus(id, 'editing')}
          />
          <button type="button" aria-label="Remove" className="icon icon-destroy" onClick={removeTask} />
        </div>
        {isEdit ? (
          <form onSubmit={(e) => changeTask(e, id, newValue)}>
            <input type="text" className="edit" defaultValue="Editing task" value={newValue} onChange={editTask} />
          </form>
        ) : (
          ''
        )}
      </li>
    )
  }
}
