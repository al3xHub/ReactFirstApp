
import { useState } from "react";

function Taskform({ createTask }) {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        createTask({
            title, description
        });

        setDescription('');
        setTitle('');
    }

    return (
        <form action="" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Write your task here"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                autoFocus
            />
            <textarea 
            placeholder="Write the description of the task..."
            onChange={(e)=>{
                setDescription(e.target.value);
            }}
            value={description}
            />
            <input type="submit" value="Send" />
        </form>
    )
}

export default Taskform
