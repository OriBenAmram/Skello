import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MdClose } from "react-icons/md";
import { BsTextLeft } from "react-icons/bs";

// Actions
import { updateTask } from '../../store/board/board.action.js';

export function TaskDescription({ board, group, task, description }) {
    
    const dispatch = useDispatch();
    const [descriptionText, setDescriptionText] = useState(false);
    const [isTextAreaOpen, toggleTextArea] = useState(false);

    const onSaveDescription = () => {
        const taskToUpdate = { ...task, description: descriptionText }
        dispatch(updateTask(board._id, group.id, task.id, taskToUpdate));
    }

    return (
        <div className='description-container'>
            <div className="title-container">
                <BsTextLeft className='primary-icon main-content-icon' />
                <h3>Description</h3>
            </div>
            <textarea onChange={(ev) => {
                setDescriptionText(ev.target.value)
            }} placeholder={description} onClick={() => toggleTextArea(true)} onBlur={() => toggleTextArea(false)} className="basic-textarea description-text-area"></textarea>
            {isTextAreaOpen && <div className="description-edit-container">
                <div className='left-btns-container'>
                    <button className="secondary-btn" onMouseDown={() => {
                        onSaveDescription()
                    }}>Save</button>
                    <button className="primary-close-btn"><MdClose className='details-secondary-close-btn-icon' /></button>
                </div>
                <button className="details-primary-link-btn">Formatting help</button>
            </div>}
        </div>
    );
}
