import React, {Component} from 'react';
import './App.css';
import Footer from './components/Footer';
import NewTaskForm from "./components/NewTaskForm";
import TaskList from './components/TaskList';


export default class App extends Component{

  state = {
    tasks:[
      {description:'Completed task', created:'created 17 seconds ago',id:1},
      {description:'Editing task', created:'created 5 minutes ago',id:2},
      {description:'Active task', created:'created 5 minutes ago',id:3}
    ]
  }

  removeTask = (id)=>{
    this.setState((state)=>{
      let newTasks = state.tasks.filter(el=>el.id!==id)

      return {
        tasks: newTasks
      }

    })
  }

  render() {
    return (
      <section className="todoapp">
        <NewTaskForm/>
        <TaskList tasks={this.state.tasks} removeTask={this.removeTask}/>
        <Footer/>
      </section>
   

  );
  }
}

