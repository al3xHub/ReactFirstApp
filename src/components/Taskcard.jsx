import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function Taskcard({ task }) {
  const { deleteTask } = useContext(TaskContext);

  return (
    <div className="bg-gray-900 text-white p-3 rounded-md">
      <h1 className="text-xl font-bold capitalize">{task.title}</h1>
      <p className="text-sm text-gray-500 m-1">{task.description}</p>
      <button className="bg-red-500 rounded-md p-1 m-1 hover:bg-red-400" onClick={() => deleteTask(task.id)}>Delete task</button>
    </div>
  )
}

export default Taskcard
