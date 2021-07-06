import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const NewBoxForm = ({addBox}) => {
    const INITIAL_STATE  = {width:"", height:"",backgroundColor:"" };
    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleSubmit = evt => {
        evt.preventDefault();
        addBox({...formData, id: uuidv4()});
        setFormData(INITIAL_STATE);
    };

    const handleChange = evt => {
        const { name, value} = evt.target;
        setFormData(fData => ({
            ...fData,
            [name]: value
        }));
    };

    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="width">Width:</label>
            <input
                id="width"
                name="width"
                value={formData.width}
                onChange={handleChange}
            />
            
            <label htmlFor="height">Height:</label>
            <input
                id="height"
                name="height"
                value={formData.height}
                onChange={handleChange}
            />

            <label htmlFor="backgroundColor">Background Color:</label>
            <input
                id="backgroundColor"
                name="backgroundColor"
                value={formData.backgroundColor}
                onChange={handleChange}
            />

            <button>Add a new Box!</button>
        </form>
    );
};

export default NewBoxForm;