import { IoCheckbox } from "react-icons/io5";
import { MdCheckBoxOutlineBlank, MdMoreHoriz } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";
import { BiSmile } from "react-icons/bi";
import { GoMention } from "react-icons/go"
import React, { useState, useEffect } from 'react';

import Picker from 'emoji-picker-react';
import { DynamicActionModal } from '../dynamic-actions/DynamicActionModal.jsx'


export function TaskTodoPreview({ todo, onToggleTodo, onRemoveTodo, onSaveTodo }) {
    const [isTextAreaOpen, toggleTextArea] = useState(false);
    const [currTodo, setCurrTodo] = useState(todo)

    const [showPicker, setShowPicker] = useState(false);
    const [modal, setModal] = useState({ isModalOpen: false, type: null });

    const onToggleTextArea = (ev, isShownTextArea) => {
        ev.stopPropagation();
        ev.preventDefault();
        toggleTextArea(isShownTextArea)
    }

    useEffect(() => {
        setCurrTodo(todo);
    }, [todo]);

    const onEmojiClick = (event, emojiObject) => {

        setCurrTodo({ ...currTodo, title: currTodo.title + emojiObject.emoji });
        setShowPicker(false);
    };

    const toggleModal = ({ event, type }) => {
        if (modal.isModalOpen) {

            setModal({ ...modal, isModalOpen: false })
            return
        }

        setModal({ isModalOpen: true, type, event, isDeleteModal: true })
    }

    return (<div className='todo-preview' key={todo.id} onBlur={(ev) => {
        if (!showPicker) {
            onToggleTextArea(ev, false)
        }
    }}>
        {/* ICON */}
        {(todo.isDone) ? <IoCheckbox className='checkbox-checked'
            onClick={(ev) => {
                ev.preventDefault()
                onToggleTodo(ev, todo.id)
            }} />
            : <MdCheckBoxOutlineBlank className='checkbox-blank ' onClick={(ev) => onToggleTodo(ev, todo.id)} />}
        {/* TEXT-AREA */}
        <div>

            <textarea
                value={currTodo.title} className={`basic-textarea todo-item  ${(todo.isDone) ? 'checked' : ''}`}
                onChange={(ev) => setCurrTodo({ title: ev.target.value })}
                onClick={(ev) => onToggleTextArea(ev, true)}  >

            </textarea>
            <MdMoreHoriz className="more-icon" onClick={(event) => toggleModal({ event, type: 'removeMenuPopup' })} />
            {/* Editing */}
            {isTextAreaOpen && <section className='edit-todo-controllers'>
                <div>
                    <button
                        className='save-btn'
                        onMouseDown={(ev) => {
                            onSaveTodo(ev, todo.id, currTodo)
                            onToggleTextArea(ev, false)
                        }
                        }>
                        Save
                    </button>
                    <button className="primary-close-btn">X</button>
                </div>
                <div className='edit-icons-options'>
                    <BiSmile onMouseDown={() => {
                        setShowPicker(val => !val)
                    }} />
                    {showPicker && (
                        <Picker pickerStyle={{
                            width: '400px', height: '260px', position: 'absolute', top: '17px', right: '0', zIndex: 20
                        }} onEmojiClick={onEmojiClick} />
                    )}
                    <GoMention />
                </div>
            </section>}
        </div>
        {modal.isModalOpen && <DynamicActionModal isDeleteModal={true} onRemoveTodo={onRemoveTodo} todoId={todo.id} toggleModal={toggleModal} type={modal.type} event={modal.event} />}
    </div>
    )
}


