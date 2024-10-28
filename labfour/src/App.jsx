import { useState } from 'react';
import './App.css';
import Task from './components/Task';
import TaskForm from './components/TaskForm';

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("All");

  const remainingTasks = tasks.filter(task => !task.completed).length;

  return (
    <div>
      <h1>Daily Planner</h1>
      <TaskForm setTasks={setTasks} />
      <button onClick={() => setFilter("All")}>All</button>
      <button onClick={() => setFilter("Completed")}>Completed</button>
      <button onClick={() => setFilter("Pending")}>Pending</button>
      <h2>{remainingTasks} task{remainingTasks !== 1 ? 's' : ''} remaining</h2>
      <ul>
        {tasks.filter(task => {
          if (filter === "All") return true;
          if (filter === "Completed") return task.completed;
          return !task.completed;
        }).map((task, index) => (
          <Task key={index} task={task} setTasks={setTasks} index={index} />
        ))}
      </ul>
    </div>
  );
}

export default App;
