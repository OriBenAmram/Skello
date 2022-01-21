import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BsCheck2Square } from "react-icons/bs";


import { TaskTodolist } from './TaskTodoList.jsx'


export function TaskChecklistPreview({ checklist, checklist: { title, id, } }) {
    const [isAddingItem, setAddingItem] = useState(false);
    const [isEditingTitle, setEditingTitle] = useState(false);
    const [checklistData, setChecklistData] = useState(checklist)
    const [isTextAreaOpen, toggleTextArea] = useState(false);



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





    return (
        <div className='checklist-container'>
            {/* TITLE */}

            {/* Normal */}
            {!isEditingTitle && <section>
                <div className='title-container'>
                    <BsCheck2Square className='primary-icon main-content-icon' />
                    <h3>{title}</h3>
                    <div className='btns-container'>
                        <button className="checklist-main-btn">Hide checked Items</button>
                        <button className="checklist-main-btn">Delete</button>
                    </div>
                </div>
            </section>}

            {/* Editing */}
            {isEditingTitle && <section>


            </section>}
            {/* <textarea className='checklist-title-textarea' name='title' onChange={(event) => handleChange(event)} defaultValue={title} ></textarea>

            {/* PROGRESS-BAR */}
            <div className='progress-bar' >
            </div>
            {/* CHECKLIST-LIST */}
            <TaskTodoList

                task={task} />


            {/* ADD-AN-ITEM */}
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
        </div>
    );
}

