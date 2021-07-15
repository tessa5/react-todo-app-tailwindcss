import React, {useState, useRef, useEffect} from 'react'

function Forms(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : '');

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus();
    });

    const handleChange = e => {
        setInput(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 1000),
            text: input
        });

        setInput('');
    };

    return (
        <form className="" onSubmit={handleSubmit}>
            {props.edit ? (
                <>
                     <input 
                type="text"
                placeholder="add a task"
                value={input}
                className="w-48 h-auto border px-4 py-1 rounded-lg ml-3 mb-3"
                onChange={handleChange}
                ref={inputRef}
                   
            />
            
            <button
                onClick={handleSubmit}
                className="bg-white hover:bg-black text-black hover:text-white border border-2 border-gray-900 px-4 py-2 m-2 text-base font-medium rounded-lg"
            >update task</button>
            </>
            ) : (
                <>
                <input
                    placeholder="Add task"
                    onChange={handleChange}
                    ref={inputRef}
                    className="w-48 h-auto border px-4 py-1 rounded-lg ml-3 mb-3"
                    value={input}
                    />

                <button onClick={handleSubmit} className="bg-black hover:bg-white text-white hover:text-black text-base font-medium ml-3 px-6 py-2 border border-black rounded-lg">Add Task</button>
                </>
            )}
            
            
        </form>
        
    )
}

export default Forms
