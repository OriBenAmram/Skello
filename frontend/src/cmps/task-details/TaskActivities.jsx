import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AiOutlineCreditCard, AiOutlineBars } from "react-icons/ai";
import { BiSmile } from "react-icons/bi";
import { MdOutlineAttachment } from "react-icons/md"
import { GoMention } from "react-icons/go"

export function TaskActivities() {

    const [isTextAreaOpen, toggleTextArea] = useState(false);


    return (
        <div className='activity-container'>
            <div className='title-container'>
                <AiOutlineBars className='primary-icon main-content-icon' />
                <h3>Activity</h3>
                <button className="details-primary-link-btn">Show details</button>
            </div>
            <div className='text-area-container'>
                <textarea defaultValue="" onClick={() => toggleTextArea(true)} onBlur={() => toggleTextArea(false)} className='input-activity-box comment-general-box' placeholder="Write a comment...">
                </textarea>
                {isTextAreaOpen && <section>
                    <button className='save-btn'>Save</button>
                    <div className='add-icons-options'>
                        <MdOutlineAttachment />
                        <GoMention />
                        <BiSmile />
                        <AiOutlineCreditCard />
                    </div>
                </section>}
            </div>
        </div>
    );
}
