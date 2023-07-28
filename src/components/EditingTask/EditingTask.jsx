import React, { Component } from 'react'
import './EditingTask.css'

export default class EditingTask extends Component {
 
  state = { value: this.props.description }
  

  editValue = (e) => {
    const newValue = e.target.value
    this.setState({
      value: newValue,
    })
  }
  setDescription = (e,id,newDesk) =>{
    const { onChangeTask ,onToogleStatus } = this.props
    e.preventDefault()
    onChangeTask(id,newDesk)
    
    
  }

  render() {
    const { value } = this.state
    const { editValue,setDescription } = this
    const { id } = this.props
    return (
      <form onSubmit={(e)=>setDescription(e,id,value)}>
        <input type="text" className="edit" onChange={editValue} value={value} />
      </form>
    )
  }
}
