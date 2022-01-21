import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BsCheck2Square } from "react-icons/bs";
import { IoCheckbox } from "react-icons/io5";
import { FiMoreHorizontal } from "react-icons/fi";
import { MdCheckBoxOutlineBlank } from "react-icons/md";



export function TaskChecklistPreview({ checklist, checklist: { title, id, } }) {
    const [isAddingItem, setAddingItem] = useState(false);
    const [checklistData, setChecklistData] = useState(checklist)



    function handleChange({ target }) {
        const { name, value } = target
        setChecklistData({ ...checklistData, [name]: value })
    }

    function saveChecklist() {
        console.log(checklistData)
    }

    function onToggleTodo(todoId) {
        console.log(todoId)
        const todoIdx = checklist.todos.findIndex(todo => todo.id === todoId);
        checklistData.todos[todoIdx].isDone = !checklist.todos[todoIdx].isDone
        setChecklistData({ ...checklistData })
    }

    const elTodos = () => {
        return checklistData.todos.map(todo => {
            return <div key={todo.id}>
                {(todo.isDone) ? <IoCheckbox className='checkbox-icon'
                    onClick={() => onToggleTodo(todo.id)} />
                    : <MdCheckBoxOutlineBlank className='checkbox-icon' onClick={() => onToggleTodo(todo.id)} />}
                <span className={`todo-title ${(todo.isDone) ? 'checked' : ''}`}>{todo.title}</span>
                {<FiMoreHorizontal className='more-icon' />}
            </div>
        })
    }

    return (
        <div className='checklist-container'>
            <div className='title-container'>
                <BsCheck2Square className='primary-icon main-content-icon' />
                <textarea name='title' onChange={(event) => handleChange(event)} defaultValue={title} ></textarea>
                {/* <button className="details-primary-btn">Delete</button> */}
                <div>
                    <button style={{ backgroundColor: "red" }} onClick={() => saveChecklist()} >save</button>
                </div>
            </div>
            <div className='progress-bar' >
            </div>
            <section className='check-list-todos'>
                {elTodos()}
            </section>
            {!isAddingItem && <button className='details-primary-btn add-item-btn' onClick={() => {
                setAddingItem(true)
            }}>Add an Item</button>}
            {isAddingItem && <section className='adding-item-section'>
                <textarea autoFocus onBlur={() => {
                    setAddingItem(false)
                }}></textarea>
                <div className='add-item-controllers'>
                    <button>Add</button>
                    <button>X</button>
                </div>
            </section>}
            {/* <div className='text-area-container'>
    <textarea defaultValue="" className='input-activity-box comment-general-box' placeholder="Write a comment...">
    </textarea>
    <button className='save-btn'>Add</button>
</div> */}
        </div>
    );
}