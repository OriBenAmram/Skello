import { IoCheckbox } from "react-icons/io5";
import { FiMoreHorizontal } from "react-icons/fi";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { AiOutlineCreditCard, AiOutlineBars, AiOutlineDelete } from "react-icons/ai";
import { BiSmile } from "react-icons/bi";
import { MdOutlineAttachment } from "react-icons/md"
import { GoMention } from "react-icons/go"
import React, { useState, useEffect } from 'react';


export function TaskTodoPreview({ todo, onToggleTodo, onRemoveTodo, onSaveTodo }) {
    const [isTextAreaOpen, toggleTextArea] = useState(true);
    const [currTodo, setCurrTodo] = useState(todo)

    const onToggleTextArea = (ev, isShownTextArea) => {
        ev.stopPropagation();
        console.log(isShownTextArea)
        toggleTextArea(isShownTextArea)
    }

    return (<div className='todo-preview' key={todo.id} onBlur={(ev) => onToggleTextArea(ev, false)}>
        {/* ICON */}
        {(todo.isDone) ? <IoCheckbox className='checkbox-icon'
            onClick={() => onToggleTodo(todo.id)} />
            : <MdCheckBoxOutlineBlank className='checkbox-icon' onClick={() => onToggleTodo(todo.id)} />}

        {/* TEXT-AREA */}
        <textarea
            defaultValue={todo.title} className={`todo-item  ${(todo.isDone) ? 'checked' : ''}`}
            onChange={(ev) => setCurrTodo({ title: ev.target.value })}
            onClick={(ev) => onToggleTextArea(ev, true)}  >

        </textarea>
        <AiOutlineDelete className="delete-icon" onClick={() => onRemoveTodo(todo.id)} />
        {/* Editing */}
        {isTextAreaOpen && <section className='edit-todo-controllers'>
            <div>
                <button
                    className='save-btn'
                    onClick={() => onSaveTodo(todo.id, todo)}>
                    Save
                </button>
                <button className="primary-close-btn">X</button>
            </div>
            <div className='edit-iconts-options'>
                <BiSmile />
                <GoMention />
            </div>
        </section>}
    </div>
    )
}