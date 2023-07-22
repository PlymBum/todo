import React, { Component } from "react";
import "./Task.css"

export default class Task extends Component{

  

  state = {
    completed: false,
    isEdit:false
  }
  toogleComplited = () =>{
    this.setState((state) => ({
      completed: !state.completed
    }));  
  }

  toogleEdit = () =>{
      this.setState((state) => ({
        isEdit: !state.isEdit
      }));  
    }
  closeEditor = (event)=>{
    if(event.key === 'Enter'){
      console.log('enter press here! ')
    }
  }

  

  render(){

    const {completed,isEdit} = this.state
    const {description,created,removeTask} = this.props

    return(
      
      <li className={isEdit?'editing':completed?'completed':''}>
        
      <div className="view">
        <input className="toggle" type="checkbox" checked={completed} onChange={this.toogleComplited}/>
        <label>
          <span className="description">{description}</span>
          <span className="created">{created}</span>
        </label>
        <button className="icon icon-edit" onClick={this.toogleEdit}></button>
        <button className="icon icon-destroy" onClick={removeTask}></button>
      </div>
      {isEdit?
          <input type="text" className="edit" defaultValue="Editing task" onKeyDown={this.closeEditor}></input>:""
      } 
    </li>
  )
  }
}


// const Task1 = ({status,description,created}) =>{
    
// }

