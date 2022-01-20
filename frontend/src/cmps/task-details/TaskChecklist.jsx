import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { BsCheck2Square } from "react-icons/bs";

export function TaskChecklist() {

    const [isAddingItem, setAddingItem] = useState(false);


    return (
        <div className='checklist-container'>
            <div className='title-container'>
                <BsCheck2Square className='primary-icon main-content-icon' />
                <h3>Checklist</h3>
                <button className="details-primary-btn">Delete</button>
            </div>
            <div className='progress-bar'></div>
            <section className='check-list-todos'>

            </section>
            {!isAddingItem && <button className='details-primary-btn add-item-btn'>Add an Item</button>}
            {isAddingItem && <section>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
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