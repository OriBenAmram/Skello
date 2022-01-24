import { IoCheckbox } from "react-icons/io5";
import { MdCheckBoxOutlineBlank, MdMoreHoriz } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";
import { BiSmile } from "react-icons/bi";
import { GoMention } from "react-icons/go"
import React, { useState } from 'react';

import Picker from 'emoji-picker-react';
import { DynamicActionModal } from '../dynamic-actions/DynamicActionModal.jsx'


export function TaskTodoPreview({ todo, onToggleTodo, onRemoveTodo, onSaveTodo }) {
    const [isTextAreaOpen, toggleTextArea] = useState(false);
    const [currTodo, setCurrTodo] = useState(todo)
    const [showPicker, setShowPicker] = useState(false);
    const [modal, setModal] = useState({ isModalOpen: false, pos: null, type: null });

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

    const toggleModal = ({ event, type }) => {
        if (modal.isModalOpen) {
            console.log('om here');
            console.log(modal);
            setModal({ ...modal, isModalOpen: false })
            return
        }
        console.log('baba');
        console.log(type);
        setModal({ isModalOpen: true, pos: { clientY: event.clientY, clientX: event.clientX }, type })
    }

    return (<div className='todo-preview' key={todo.id}>
        {/* ICON */}
        {(todo.isDone) ? <IoCheckbox className='checkbox-checked'
            onClick={() => onToggleTodo(todo.id)} />
            : <MdCheckBoxOutlineBlank className='checkbox-blank ' onClick={() => onToggleTodo(todo.id)} />}
        {/* TEXT-AREA */}
        <div onBlur={(ev) => onToggleTextArea(ev, false)}>

            <textarea
                value={currTodo.title} className={`basic-textarea todo-item  ${(todo.isDone) ? 'checked' : ''}`}
                onChange={(ev) => setCurrTodo({ title: ev.target.value })}
                onClick={(ev) => onToggleTextArea(ev, true)}  >

            </textarea>
            <MdMoreHoriz className="more-icon" onClick={(event) => toggleModal({ event, type: 'todoOptions' })} />
            {/* Editing */}
            {isTextAreaOpen && <section className='edit-todo-controllers'>
                <div>
                    <button
                        className='save-btn'
                        onMouseDown={(ev) => {
                            onSaveTodo(ev, todo.id, currTodo)
                            console.log("save")
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
        {modal.isModalOpen && <DynamicActionModal onRemoveTodo={onRemoveTodo} todoId={todo.id} toggleModal={toggleModal} type={modal.type} posYAddition={350} pos={modal.pos} />}
    </div>
    )
}


