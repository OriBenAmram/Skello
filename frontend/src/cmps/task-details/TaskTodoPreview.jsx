import { IoCheckbox } from "react-icons/io5";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";
import { BiSmile } from "react-icons/bi";
import { GoMention } from "react-icons/go"
import React, { useState } from 'react';

import Picker from 'emoji-picker-react';


export function TaskTodoPreview({ todo, onToggleTodo, onRemoveTodo, onSaveTodo }) {
    const [isTextAreaOpen, toggleTextArea] = useState(false);
    const [currTodo, setCurrTodo] = useState(todo)
    const [showPicker, setShowPicker] = useState(false);

    const onToggleTextArea = (ev, isShownTextArea) => {
        ev.stopPropagation();
        ev.preventDefault();
        toggleTextArea(isShownTextArea)
    }

    const onEmojiClick = (event, emojiObject) => {

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
        <AiOutlineDelete className="delete-icon" onClick={() => onRemoveTodo(todo.id)} />
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