import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineCreditCard } from "react-icons/ai";

// Actions
import { updateTask } from '../../store/board/board.action.js';

export function TaskHeader({ board, group, task, title }) {
    const dispatch = useDispatch();
    const [titleText, setTitleText] = useState(false);

    const onSaveTitle = () => {
        const taskToUpdate = { ...task, title: titleText }
        dispatch(updateTask(board._id, group.id, task.id, taskToUpdate));
    }

    return (
        <section className='details-header'>
            <AiOutlineCreditCard className='primary-icon header-icon' />
            <textarea onBlur={() => {
                onSaveTitle()
            }} onChange={(ev) => {
                setTitleText(ev.target.value)
            }} defaultValue={title} className='basic-textarea'></textarea>
            <div className="header-sub-title">
                in list <span> {group.title} </span>
            </div>
        </section>
    );
}
