import React from  "react";

const Todo = (props) => {
    const remove = () => props.handleRemove(props.id)
    return(
        <div>
            {props.task}
            <button onClick={remove}>X</button>
        </div>
    )

}

export default Todo;