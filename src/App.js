
import './App.css';
import Footer from './components/Footer';
import NewTaskForm from "./components/NewTaskForm";
import TaskList from './components/TaskList';


function App() {
  return (
      <section className="todoapp">
        <NewTaskForm/>
        <TaskList/>
        <Footer/>
      </section>
   

  );
}

export default App;
