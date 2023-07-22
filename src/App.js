import React, {Component} from 'react';
import './App.css';
import Footer from './components/Footer';
import NewTaskForm from "./components/NewTaskForm";
import TaskList from './components/TaskList';
import {formatDistanceToNow } from 'date-fns'



export default class App extends Component{

  maxId = 300;

  state = {
    filter:'ALL',
    tasks:[
       this.createTask("Learn WebCore", new Date(2023, 3, 22),true),
       this.createTask("Learn JSCore", new Date(2023, 5, 22),true),
       this.createTask("Learn React", new Date(2023, 6, 22))

    ]
  }

  createTask(description,date,completed=false){
    return {
      description,
      created : formatDistanceToNow(date, { addSuffix: true }),
      id: this.maxId++,
      completed,
      isEdit: false
    }
  }

  removeTask = (id)=>{
    this.setState((state)=>{
      let newTasks = state.tasks.filter(el=>el.id!==id)
      return {
        tasks: newTasks
      }
    })
  }
  addTask = (text,date)=>{
    const newTask = this.createTask(text,date)
    this.setState(({tasks})=>{
      return {
        tasks:[...tasks,newTask]
      }
    })
  }
  onToogleCompleted = (id) =>{
    this.toogleTaskAttribute(this.state.tasks,id,'completed')
    
  }
  onToogleIsEdit = (id) =>{
    this.toogleTaskAttribute(this.state.tasks,id,'isEdit')
  }
  toogleTaskAttribute =(arr,id,attributeName)=>{
    const idx = arr.findIndex(el=>el.id===id)
    let editingTask = {...arr[idx]}
    this.setState(({tasks})=>{
      const newArr = [ ...tasks.slice(0,idx),
        {...editingTask,[attributeName]:!tasks[idx][attributeName]},
        ...tasks.slice(idx+1)]
        return {
          tasks:newArr
        }
    })
  }

  onChangeFilter = (filterName) =>{
    this.setState(({filter})=>{
      return {
        filter: filterName
      }
    })
  }

  onDeleteCompleted = ()=>{
    this.setState((state)=>{
      let newTasks = state.tasks.filter(el=>el.completed===false)
      return {
        tasks: newTasks
      }
    })
  }

  activeTasksCount = ()=>{
    return this.state.tasks.filter(el=>el.completed===false).length
  }
  
  render() {
    return (
      <section className="todoapp">
        <NewTaskForm addTask={this.addTask}/>
        <TaskList tasks={this.state.tasks}
                  filter={this.state.filter} 
                  removeTask={this.removeTask}
                  onToogleCompleted={this.onToogleCompleted}
                  onToogleIsEdit={this.onToogleIsEdit}/>
        <Footer filter={this.state.filter} 
                onChangeFilter={this.onChangeFilter}
                onDeleteCompleted={this.onDeleteCompleted}
                activeTasks={this.activeTasksCount()}/>
      </section>
   

  );
  }
}

