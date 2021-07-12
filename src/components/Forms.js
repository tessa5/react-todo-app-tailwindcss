import React, {useState} from 'react'

function Forms(props ) {
    const [input, setInput] = useState('');

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 1000),
            text: input
        });
    };
    return (
        <div>
            <img src={Image.jpg} alt="background"/>
        <form className="" onSubmit={handleSubmit}>
            <input 
                type="text"
                placeholder="add a task"
                value={input}
                className=""
                // onChange={}    
            >
            </input>
            <button
                type="submit"
                className="bg-violet-100 text-violet-700 text-base font-semibold px-6 py-2 rounded-lg"
            >Add task</button>
            <div>
                <select className="border-solid border-2 border-black rounded-lg text-lg font-light">
                    <option value ="all"> All Tasks</option>
                    <option value="completed"> Completed Tasks</option>
                    <option value="uncompleted">Uncompleted Tasks</option>
                </select>
            </div>
        </form>
        </div>
    )
}

export default Forms
