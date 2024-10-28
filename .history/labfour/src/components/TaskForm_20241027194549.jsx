import { useState } from "react";

function TaskForm({ setTasks }) {
    const [currentTask, setCurrentTask] = useState(""); // Initialize with an empty string

    const save = () => {
        if (currentTask.trim() === "") return; // Prevent adding empty tasks
        setTasks((currentTasks) => {
            const tmpTasks = [...currentTasks]; // deep copy
            tmpTasks.push({ task: currentTask, completed: false });
            return tmpTasks;
        });
        setCurrentTask(""); // Reset input field after saving
    };

    return (
      <div>
        <input
          className="input"
          type="text"
          onChange={(e) => setCurrentTask(e.target.value)}
          value={currentTask}
          placeholder="new task..."
        />
        <button className="save" onClick={save}>Save</button>
      </div>
    );
}

export default TaskForm;
