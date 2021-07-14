import React, {useState } from 'react'
import Forms from './Forms'
import TodoItems from './TodoItems'

function Todolist() {
    const [list, setList] = useState([])

    const addListItem = listItem => {
        if(!listItem.text || /^\s*$/.test(listItem.text)) {
            return;
        }
        const newList = [listItem, ... list];
        
        setList(newList);
        console.log(...list);

    }

    const updateListItem = (listItemId, newValue) => {
        if(!newValue.text || /^\s*$/.test(newValue.text)){
            return;
        }

        setList(prev => prev.map(item => (item.id === listItemId ? newValue : item)));
    };

    const removeListItem = id => {
        const removedArr = [...list].filter(listItem => listItem.id !== id);

        setList(removedArr);
    };

    const completeListItem = id => {
        let updatedList = list.map(listItem => {
            if (listItem.id === id) {
                listItem.isComplete = !listItem.isComplete;
            }
            return listItem;
        });
        setList(updatedList);
    };
    return (
        <div className="container">
            <h1>Today's Checklist</h1>
            <Forms onSubmit={addListItem}/>
            <TodoItems
                list={list}
                completeListItem={completeListItem}
                removeListItem={removeListItem}
                updateListItem={updateListItem}
            />
            
        </div>
    )
}

export default Todolist
