
import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function Taskform() {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const {createTask} = useContext(TaskContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        createTask({
            title, description
        });

        setDescription('');
        setTitle('');
    }

    return (
        <div className="max-w-md mx-auto">
            <form action="" onSubmit={handleSubmit} className="p-7 mb-4 bg-slate-500 rounded-md">
                <h1 className="text-2xl mx-auto text-slate-50 capitalize pb-2 text-center">create task</h1>
            <input
                type="text"
                placeholder="Write your task here"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                autoFocus
                className="bg-slate-300 p-3 w-full mb-2"
            />
            <textarea 
            placeholder="Write the description of the task..."
            onChange={(e)=>{
                setDescription(e.target.value);
            }}
            value={description}
            className="w-full"
            />
            <input 
            type="submit" 
            value="Save"
            className="bg-green-500 p-3 rounded-md hover:bg-green-400" />
        </form>
        </div>
        
    )
}

export default Taskform
