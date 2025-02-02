import React, { useState } from 'react'

export default function StudentAdd({ createStudent }) {

    const intialData = {
        name: '',
        email: '',
        age: ''

    };
    const [formData, setFormData] = useState(intialData);


    const handelInputchange = (event) => {
        event.preventDefault();
        console.log('handel');
        const name = event.target.name;
        const value = event.target.value;
        setFormData({ ...formData, [name]: value });
        console.log(JSON.stringify(FormData));
    };
    const handelSubmit = (event) => {
        event.preventDefault();
        createStudent(formData)

    }

    return (
        <div className='inputform'>
            <button>create a new student</button>
            <form onSubmit={handelSubmit}>
                <input type="text" name="name" onChange={handelInputchange} placeholder='Enter name' />
                <input type="text" name="mail" onChange={handelInputchange} placeholder='Enter mail' />
                <input type="text" name="age" onChange={handelInputchange} placeholder=' Enter age' />
                <input type="submit" value="save" />
            </form>
        </div>
    )
}
