
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineTags, AiOutlineFieldTime, AiOutlineCreditCard, AiOutlineClose, AiOutlineCopy } from "react-icons/ai";
import { BsPersonPlus } from "react-icons/bs";
import { MdOutlineAttachment } from "react-icons/md"


// const [board, setBoard] = useState(null);  

export function TaskDetails(props) {
    const dispatch = useDispatch();
    const [task, setTask] = useState(null);
    const currBoard = useSelector(state => state.boardModule.board);


    useEffect(async () => {
        const { boardId, groupId, taskId } = props.match.params;
        console.log('params:', boardId, groupId, taskId);
        const currGroup = currBoard?.groups.find(group => group.id === groupId);
        const currTask = currGroup?.tasks?.find(task => task.id === taskId);
        console.log('currTask:', currTask);
        setTask(currTask)
    }, []);


    return (
        <section className='task-details-page'>


            <div className="task-details-modal">
                {/* Cover */}
                <section className='details-cover'>
                    <button className="close-modal-btn">X</button>
                </section>
                {/* Details-header */}
                <section className='details-header'>
                    <AiOutlineCreditCard className='header-icon' />
                    <textarea defaultValue="baba">

                    </textarea>
                    <div className="header-sub-title">
                        <span>daniel </span>
                    </div>
                </section>

                <section className='main-content'>
                    {/* Main-Col */}
                    <section className='main-col'>
                        {/* Description */}
                        <div className='description-container'>
                            <div className="title-container">
                                <h3>Description</h3>
                            </div>
                            <textarea defaultValue="" placeholder="Add a more detailed description..." className="description-text-area"></textarea>
                            <div className="description-edit-container">
                                <div>
                                    <button className="save-btn">Save</button>
                                    <button className="primary-close-btn">X</button>
                                </div>
                                <button className="details-primary-btn">Formatting help</button>
                            </div>
                        </div>
                        {/* Activities */}
                        <div className='activity-container'>
                            <div className='title-container'>
                                <h3>Activity</h3>
                                <button className="details-primary-btn">Show details</button>
                            </div>
                            <input className='input-activity-box comment-general-box' type="text" placeholder="Write a comment..." />
                        </div>
                    </section>

                    {/* Side-Bar */}
                    <section className='side-bar'>
                        <section className='add-to-card'>
                            <h3>Add to card</h3>
                            <button className="button-link"> <BsPersonPlus /> Members</button>
                            <button className="button-link"> <AiOutlineTags /> Labels</button>
                            <button className="button-link">  Checklist</button>
                            <button className="button-link"> <AiOutlineFieldTime /> Dates</button>
                            <button className="button-link"> <MdOutlineAttachment /> Attachment</button>
                        </section>
                        <section className='actions'>
                            <h3>Actions</h3>
                            <button className="button-link"> Move</button>
                            <button className="button-link"> <AiOutlineCopy />Copy</button>
                            <button className="button-link"> Archive</button>
                        </section>
                    </section>

                </section>

            </div>
        </section>
    )
}