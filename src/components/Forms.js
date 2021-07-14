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
                className=""
                onChange={handleChange}
                ref={inputRef}
                   
            />
            
            <button
                onClick={handleSubmit}
                className="bg-violet-900 text-violet-700 text-base font-semibold px-6 py-2 rounded-lg"
            >update task</button>
            </>
            ) : (
                <>
                <input
                    placeholder="Add task"
                    onChange={handleChange}
                    ref={inputRef}
                    className=""
                    value={input}
                    />

                <button onClick={handleSubmit} className="">Add Task</button>
                </>
            )}
            
            
        </form>
        
    )
}

export default Forms
