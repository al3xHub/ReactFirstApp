import Taskcard from "./Taskcard";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function Tasklist() {

    const {tasks} = useContext(TaskContext);

    if(tasks.length === 0){
        return <h1 className="text-4xl font-bold text-center mt-5 text-gray-600">No tasks yet... :(</h1>
    }
    return (
        <div className="grid grid-cols-4 gap-2">
            {tasks.map((task) => (
                <Taskcard key={task.id} task={task} />
            ))}
        </div>
    )
}

export default Tasklist;
