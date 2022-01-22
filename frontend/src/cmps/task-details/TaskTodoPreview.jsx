import { IoCheckbox } from "react-icons/io5";
import { FiMoreHorizontal } from "react-icons/fi";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { AiOutlineCreditCard, AiOutlineBars, AiOutlineDelete } from "react-icons/ai";
import { BiSmile } from "react-icons/bi";
import { MdOutlineAttachment } from "react-icons/md"
import { GoMention } from "react-icons/go"
import React, { useState, useEffect } from 'react';

import Picker from 'emoji-picker-react';


export function TaskTodoPreview({ todo, onToggleTodo, onRemoveTodo, onSaveTodo }) {
    const [isTextAreaOpen, toggleTextArea] = useState(false);
    const [currTodo, setCurrTodo] = useState(todo)
    const [showPicker, setShowPicker] = useState(false);

    const onToggleTextArea = (ev, isShownTextArea) => {
        ev.stopPropagation();
        ev.preventDefault();

        console.log('ev:', ev);

        console.log(isShownTextArea)
        toggleTextArea(isShownTextArea)
    }

    const onEmojiClick = (event, emojiObject) => {
        console.log('baba');
        console.log('emojiObject:', emojiObject);

        setCurrTodo({ ...currTodo, title: currTodo.title + emojiObject.emoji });
        setShowPicker(false);
        console.log(currTodo)

    };

    return (<div className='todo-preview' key={todo.id}>
        {/* ICON */}
        {(todo.isDone) ? <IoCheckbox className='checkbox-icon'
            onClick={() => onToggleTodo(todo.id)} />
            : <MdCheckBoxOutlineBlank className='checkbox-icon' onClick={() => onToggleTodo(todo.id)} />}

        {/* TEXT-AREA */}
        <textarea
            value={currTodo.title} className={`todo-item  ${(todo.isDone) ? 'checked' : ''}`}
            onChange={(ev) => setCurrTodo({ title: ev.target.value })}
            onClick={(ev) => onToggleTextArea(ev, true)}  >

        </textarea>
        {/* <AiOutlineDelete className="delete-icon" onClick={() => onRemoveTodo(todo.id)} /> */}
        {/* Editing */}
        {isTextAreaOpen && <section className='edit-todo-controllers'>
            <div>
                <button
                    className='save-btn'
                    onClick={(ev) => {
                        onSaveTodo(ev, todo.id, currTodo)
                        onToggleTextArea(ev, false)
                    }
                    }>
                    Save
                </button>
                <button className="primary-close-btn">X</button>
            </div>
            <div className='edit-iconts-options'>
                <BiSmile onClick={() => setShowPicker(val => !val)} />
                {showPicker && (
                    <Picker pickerStyle={{ width: '100%' }} onEmojiClick={onEmojiClick} />
                )}
                <GoMention />
            </div>
        </section>}
    </div>
    )
}