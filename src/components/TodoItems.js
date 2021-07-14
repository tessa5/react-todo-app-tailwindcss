// import { list } from 'postcss'
import React, {useState} from 'react'
import Forms from './Forms'

const TodoItems = ({ list, completeListItem, removeListItem, updateListItem}) => {

    const [edit, setEdit] = useState({
        id: null,
        value: ''
    });

    const submitUpdate = value => {
        updateListItem(edit.id, value);
        setEdit({
            id: null,
            value: ''
        });
    };

    if (edit.id) {
        return <Forms edit={edit} onSubmit={submitUpdate}/>;
    }
    return list.map((listItem, index) => (
        <div className={listItem.isComplete ? 'todo-row complete' : 'todo=row'} 
        key={index}>

        <div key={listItem.id} onClick={() => completeListItem(listItem.id)}>
        {listItem.text}
    </div>
    <div className="icons">
    <div className='text-black' onClick={() => removeListItem(listItem.id)}><i class="fa-solid fa-trash-can"></i></div> 
    <div className="" onClick={() => setEdit({id: listItem.id, value: listItem.text})}></div><i class="fa-solid fa-pen-to-square"></i>
    </div>
        </div>
        ))
        
}

export default TodoItems
