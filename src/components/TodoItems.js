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
        
            <div className="container mx-auto flex space-x-3 text-lg font-medium ml-8 md:ml-8">
        <li className="flex-auto flex space-x-3">
        <div className={listItem.isComplete ? 'line-through bg-green-300 w-1/2 flex items-center justify-center bg-black text-red-700 border rounded-lg cursor-auto m-3 px-4 py-2' : 'w-1/2 flex items-center justify-center bg-black text-white border rounded-lg cursor-auto m-3 px-4 py-2'} 
        key={index} >
        <div className="" key={listItem.id} onClick={() => completeListItem(listItem.id)}>
        {listItem.text}
    </div>
    </div>
    <div className='flex items-center justify-center text-xl px-6 py-2 m-3 cursor-pointer border border-gray-300 rounded-lg' onClick={() => removeListItem(listItem.id)}>
        <i class="fas fa-trash-alt"/>
        </div> 
    <div className="flex items-center justify-center text-xl px-6 py-2 m-3 cursor-pointer border border-gray-300 rounded-lg" onClick={() => setEdit({id: listItem.id, value: listItem.text})}>
        <i class="fas fa-edit"></i>
        </div>
    </li>
    </div>
        ))
        
}

export default TodoItems
