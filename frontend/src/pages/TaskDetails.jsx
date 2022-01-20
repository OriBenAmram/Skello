
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineCreditCard } from "react-icons/ai";
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


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
                            <div className="description-title-container">
                                <h3>Description</h3>
                            </div>
                            <textarea defaultValue="" placeholder="Add a more detailed description..." className="description-text-area"></textarea>
                            <div className="description-edit-container">
                                <div>
                                    <button className="save-btn">Save</button>
                                    <button className="primary-close-btn">X</button>
                                </div>
                                <button>Formatting help</button>
                            </div>
                        </div>
                        {/* Activities */}
                        <div className='activities'>
                            Activities
                        </div>
                    </section>

                    {/* Side-Bar */}
                    <section className='side-bar'>
                        <section className='suggested'>
                            suggested
                        </section>
                        <section className='add-to-card'>
                            add to card
                        </section>
                        <section className='actions'>
                            actions
                        </section>
                    </section>

                </section>

            </div>
        </section>
    )
}