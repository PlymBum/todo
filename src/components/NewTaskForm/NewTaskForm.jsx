import React, { Component } from "react";
import "./NewTaskForm.css"

export default class NewTaskForm extends Component{

    state = {
        inputValue:''
    }

    onChangeInput=(e)=>{
        this.setState({
                inputValue:e.target.value
            }
        )
    }
    onSubmit = (e)=>{
        e.preventDefault();
        this.props.addTask(this.state.inputValue,Date.now())
        this.setState({
            inputValue:''
        })
    }

    render(){
        
        const {inputValue} = this.state

        return (
            <header className="header">
                <h1>todos</h1>
                <form onSubmit={this.onSubmit}>
                <input className="new-todo" placeholder="What needs to be done?" onChange={this.onChangeInput} value={inputValue}/>
                </form>
                
            </header>
        );
    }
}



