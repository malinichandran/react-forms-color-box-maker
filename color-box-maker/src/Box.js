import React from 'react';

const Box = (props) => {
    const remove = () => props.handleRemove(props.id)
    return(
        <div>
        <div style={{
            height:props.height,
            width:props.width,
            backgroundColor:props.backgroundColor
        }}/>
        <button onClick={remove}>X</button>
        </div>
        
    );
}

export default Box;