import { IoCheckbox } from "react-icons/io5";
import { FiMoreHorizontal } from "react-icons/fi";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { AiOutlineCreditCard, AiOutlineBars, AiOutlineDelete } from "react-icons/ai";
import { BiSmile } from "react-icons/bi";
import { MdOutlineAttachment } from "react-icons/md"
import { GoMention } from "react-icons/go"
import React, { useState, useEffect } from 'react';


export function TaskTodoPreview({ todo, onToggleTodo, onRemoveTodo }) {
    const [isTextAreaOpen, toggleTextArea] = useState(false);



    return (<div className='todo-preview' key={todo.id}>
        {/* ICON */}
        {(todo.isDone) ? <IoCheckbox className='checkbox-icon'
            onClick={() => onToggleTodo(todo.id)} />
            : <MdCheckBoxOutlineBlank className='checkbox-icon' onClick={() => onToggleTodo(todo.id)} />}

        {/* TEXT-AREA */}
        <textarea defaultValue={todo.title} className={`todo-item  ${(todo.isDone) ? 'checked' : ''}`} onClick={() => toggleTextArea(true)} onBlur={() => toggleTextArea(false)} >

        </textarea>
        <AiOutlineDelete onClick={() => onRemoveTodo(todo.id)} />
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
    )
}