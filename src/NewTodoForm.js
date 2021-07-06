import React,{ useState } from "react";
import { v4 as uuidv4 } from "uuid";

const NewTodoForm = ({addTodo}) => {
    const INITIAL_STATE = {task:""}
    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleSubmit = evt => {
        evt.preventDefault();
        addTodo({...formData, id:uuidv4()});
        setFormData(INITIAL_STATE);
    };

    const handleChange = evt => {
        const{name, value} = evt.target;
        setFormData(fData => ({
            ...fData,
            [name]: value
        }));
    };

    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="task">Task to be added!</label>
            <input
                id="task"
                name="task"
                value={formData.task}
                onChange={handleChange}
            />
            <button>Add a new task!</button>
        </form>
    )
}

export default NewTodoForm;