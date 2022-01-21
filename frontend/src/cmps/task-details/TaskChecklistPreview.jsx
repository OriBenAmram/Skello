import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BsCheck2Square } from "react-icons/bs";
import { IoCheckbox } from "react-icons/io5";
import { AiOutlineMore } from "react-icons/ai";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { AiOutlineCreditCard, AiOutlineBars } from "react-icons/ai";
import { BiSmile } from "react-icons/bi";
import { MdOutlineAttachment } from "react-icons/md"
import { GoMention } from "react-icons/go"



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


    const elTodos = () => {
        return checklistData.todos.map(todo => {
            return <div className='todo-preview' key={todo.id}>
                {/* ICON */}
                {(todo.isDone) ? <IoCheckbox className='checkbox-icon'
                    onClick={() => onToggleTodo(todo.id)} />
                    : <MdCheckBoxOutlineBlank className='checkbox-icon' onClick={() => onToggleTodo(todo.id)} />}

                {/* TEXT-AREA */}
                <textarea className={`todo-item  ${(todo.isDone) ? 'checked' : ''}`} onClick={() => toggleTextArea(true)} onBlur={() => toggleTextArea(false)} >
                    {todo.title}
                </textarea>

                {/* Editing */}
                {isTextAreaOpen && <section className='edit-todo-controllers'>
                    <div>
                        <button className='save-btn'>Save</button>
                        <button className="primary-close-btn">X</button>
                    </div>
                    <div className='edit-iconts-options'>
                        <BiSmile />
                        <GoMention />
                    </div>
                </section>}
            </div>
        })
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
            <section className='todo-list'>
                {elTodos()}
            </section>

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

// <textarea defaultValue="" onClick={() => toggleTextArea(true)} onBlur={() => toggleTextArea(false)} className='input-activity-box comment-general-box' placeholder="Write a comment...">
// </textarea>