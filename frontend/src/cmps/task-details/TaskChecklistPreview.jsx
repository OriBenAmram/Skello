import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BsCheck2Square } from "react-icons/bs";

export function TaskChecklistPreview({ checklist, checklist: { title, id, } }) {

    console.log('checklist from TaskChecklistPreview:', checklist);

    const [isAddingItem, setAddingItem] = useState(false);

    function onSetTaskTitle(event) {
        console.log('im here!')
        console.log(event)
    }

    return (
        <div className='checklist-container'>
            <div className='title-container'>
                <BsCheck2Square className='primary-icon main-content-icon' />
                <textarea defaultValue={title} onChange={onSetTaskTitle}></textarea>
                <button className="details-primary-btn">Delete</button>
            </div>
            <div className='progress-bar' >
            </div>
            <section className='check-list-todos'>

            </section>
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
            {/* <div className='text-area-container'>
    <textarea defaultValue="" className='input-activity-box comment-general-box' placeholder="Write a comment...">
    </textarea>
    <button className='save-btn'>Add</button>
</div> */}
        </div>
    );
}