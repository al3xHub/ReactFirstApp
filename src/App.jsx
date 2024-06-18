import Tasklist from './components/Tasklist'
import Taskform from './components/Taskform'
import { tasks as data } from "./data/task";
import { useState, useEffect } from 'react';

function App() {

  const [tasks, setTasks] = useState([])

    useEffect(()=>{
        setTasks(data)
    }, [])

    function createTask(task){
      setTasks([...tasks, {
        id: tasks.length,
        title: task.title,
        description: task.description
      }])
    }

    function deleteTask(taskId){
      setTasks(tasks.filter(task => task.id !== taskId));
    }


  return <>
    <Taskform createTask={createTask} />
    <Tasklist tasks={tasks} deleteTask={deleteTask} />
  </>

}

export default App
