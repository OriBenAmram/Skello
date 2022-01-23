import React, { useState } from 'react';
import { MdClose } from "react-icons/md";
import { BsTextLeft } from "react-icons/bs";


export function TaskDescription({ description }) {

    const [isTextAreaOpen, toggleTextArea] = useState(false);

    return (
        <div className='description-container'>
            <div className="title-container">
                <BsTextLeft className='primary-icon main-content-icon' />
                <h3>Description</h3>
            </div>
            <textarea placeholder={description} onClick={() => toggleTextArea(true)} onBlur={() => toggleTextArea(false)} className="basic-textarea description-text-area"></textarea>
            {isTextAreaOpen && <div className="description-edit-container">
                <div className='left-btns-container'>
                    <button className="secondary-btn">Save</button>
                    <button className="primary-close-btn"><MdClose className='details-secondary-close-btn-icon' /></button>
                </div>
                <button className="details-primary-link-btn">Formatting help</button>
            </div>}
        </div>
    );
}
