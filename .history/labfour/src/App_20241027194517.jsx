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

      <button className="filter-button" onClick={() => setFilter("All")}>All</button>
      <button className="filter-button" onClick={() => setFilter("Completed")}>Completed</button>
      <button className="filter-button" onClick={() => setFilter("Pending")}>Pending</button>

      <h2>{remainingTasks} task{remainingTasks !== 1 ? 's' : ''} remaining</h2>

      <ul>
        {tasks.filter((task) => {
          if (filter === "All") return true;
          if (filter === "Completed") return task.completed;
          return !task.completed;
        }).map((task, i) => (
          <Task key={i} task={task} setTasks={setTasks} index={i} />
        ))}
      </ul>
    </div>
  );
}

export default App;
