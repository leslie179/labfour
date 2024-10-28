import { useState } from "react"

function TaskForm({ setTasks }) {
    const [currentTask, setCurrentTask] = useState()
    const save = () => {
        setTasks((currentTasks) => { // trick to get current state
            // im just naming it tmp for temporary 
            const tmpTasks = [...currentTasks] // deep copy (tmpTasks is just a copy of currentTasks cause you cant just copy an array)
            tmpTasks.push({ task: currentTask, completed: false })
            return tmpTasks
        })
        setCurrentTask("")
    }
    // the onChange is a function that runs everytime the input text changes
    // everytime the input text changes update the state with the value of the text input
    return <div>
        <input className="input" type="text" onChange={(e) => setCurrentTask(e.target.value)} placeholder="new task..."/>
        <button className="save" onClick={() => save()}>Save</button>
    </div>
}

export default TaskForm