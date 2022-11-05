import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
function App() {
  const [tasks, setTasks] = useState([
    {id:1, text:'Doctor Sage', day: 'Feb, 22nd, 2022', reminder: true}, 
    {id:2, text:'Meeting Sage', day: 'May, 2nd, 2022', reminder: false}
  ])

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => 
        task.id !== id
    ))
  }

  const toggleTask = (id) => {
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task ))
  }
  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete = { deleteTask } onToggle = {toggleTask} /> : 'No Task Found!!'}
    </div>
  );
}

export default App;
