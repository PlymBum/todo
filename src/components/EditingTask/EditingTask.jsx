import React, { Component } from 'react'
import './EditingTask.css'

export default class EditingTask extends Component {
  constructor(props) {
    super(props)
    const { description } = this.props
    this.state = { value: description }
  }

  editValue = (e) => {
    const newValue = e.target.value
    this.setState({
      value: newValue,
    })
  }

  closeEditing = (e, id) => {
    const { description, onChangeTask } = this.props
    if (e.keyCode === 27) {
      onChangeTask(id, description)
    }
  }

  setDescription = (e, id, newDesk) => {
    e.preventDefault()
    const { onChangeTask, description } = this.props

    if (newDesk === '' || newDesk.trim() === '') {
      onChangeTask(id, description)
    }

    onChangeTask(id, newDesk)
  }

  render() {
    const { value } = this.state
    const { editValue, setDescription, closeEditing } = this
    const { id } = this.props
    return (
      <form onSubmit={(e) => setDescription(e, id, value)}>
        <input type="text" className="edit" value={value} onChange={editValue} onKeyDown={(e) => closeEditing(e, id)} />
      </form>
    )
  }
}
