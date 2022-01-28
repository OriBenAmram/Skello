import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Cmps
import { DynamicActionModal } from '../dynamic-actions/DynamicActionModal.jsx'

// Services
import { updateTask, onSaveBoard } from '../../store/board/board.action.js';
import { utilService } from '../../services/util.service.js'

// Icons
import femaleGuest from '../../assets/imgs/female-guest.svg';
import { AiOutlineCreditCard, AiOutlineBars } from "react-icons/ai";
import { BiSmile } from "react-icons/bi";
import { MdOutlineAttachment } from "react-icons/md"
import { GoMention } from "react-icons/go"

export function TaskActivities({ board, group, task, description }) {
    const dispatch = useDispatch();

    const [isTextAreaOpen, toggleTextArea] = useState(false);
    const [textAreaContent, setTextAreaContent] = useState('');
    const [isActivityListShown, toggleActivityList] = useState(true);
    const [modal, setModal] = useState({ isModalOpen: false, type: null });
    const user = useSelector(state => state.userModule.loggedinUser);

    const onToggleActivityList = () => {
        toggleActivityList(!isActivityListShown)
    }

    const toggleModal = (props) => {
        const { event, type } = props
        if (modal.isModalOpen) {
            setModal({ ...modal, isModalOpen: false })
            return
        }
        setModal({ isModalOpen: true, type, event })
    }

    const getAvatarBackground = (member) => {
        return { background: `url(${member.imgUrl}) center center / cover` }
    }

    const getTaskActivity = () => {
        const TaskActivities = board.activities.filter(activity => {
            return activity.task.id === task.id
        })
        return TaskActivities
    }

    const onSaveComment = () => {
        const comment = {
            txt: textAreaContent,
            byMember: user,
            createdAt: Date.now()
        }
        const newTaskComments = task.comments.unshift(comment);
        const taskToUpdate = { ...task, comments: newTaskComments };
        const activityTxt = textAreaContent;
        dispatch(updateTask(board._id, group.id, task.id, taskToUpdate, activityTxt, true));
        setTextAreaContent('')
    }

    return (
        <div className='activity-container'>
            <div className='title-container'>
                <AiOutlineBars className='primary-icon main-content-icon' />
                <h3>Activity</h3>
                <button className="details-primary-link-btn" onClick={() => onToggleActivityList()}>{(isActivityListShown) ? 'Hide Details' : 'Shown Details'}</button>
            </div>
            <div className='text-area-container'>
                <textarea defaultValue="" value={textAreaContent} onClick={() => toggleTextArea(true)} onBlur={() => toggleTextArea(false)} className='input-activity-box comment-general-box' placeholder="Write a comment..." onChange={(ev) => {
                    setTextAreaContent(ev.target.value)
                }}>
                </textarea>
                {isTextAreaOpen && <section>
                    <button className={`save-btn ${(textAreaContent) ? 'activate' : ''}`} onMouseDown={() => {
                        onSaveComment()
                    }}>Save</button>
                    <div className='add-icons-options'>
                        <MdOutlineAttachment />
                        <GoMention />
                        <BiSmile />
                        <AiOutlineCreditCard />
                    </div>
                </section>}
            </div>
            {isActivityListShown && <div className='activity-preview-container'>
                {/* {board.activities && board.activities.map(activity => { */}
                {getTaskActivity() && getTaskActivity().map(activity => {
                    // Comment preview
                    if (activity.isComment) {
                        return <section key={activity.id} className='activity-preview'>
                            <div className={`member-avatar ${(activity.member.imgUrl) ? 'with-image' : ''}`} style={getAvatarBackground(activity.member)} onClick={(ev) => {
                                toggleModal({ event: ev, type: 'profile' })
                            }}>
                                {modal.isModalOpen && <DynamicActionModal posXAddition={0} posYAddition={0} toggleModal={toggleModal} type={'profile'} event={modal.event} />}
                            </div>
                            <div className='comment-info'>
                                <p> <span>{activity.member.fullname}</span> {utilService.timeSince(activity.createdAt)}</p>
                                <div className='comment-preview'>{activity.txt}</div>
                            </div>
                        </section>
                    }
                    // Activity
                    else return <section key={activity.id} className='activity-preview'>
                        <div className={`member-avatar ${(activity.member.imgUrl) ? 'with-image' : ''}`} style={getAvatarBackground(activity.member)} onClick={(ev) => {
                            toggleModal({ event: ev, type: 'profile' })
                        }}>
                            {modal.isModalOpen && <DynamicActionModal posXAddition={0} posYAddition={0} toggleModal={toggleModal} type={'profile'} event={modal.event} />}
                        </div>
                        <div className='activity-info'>
                            <h2> <span>{activity.member.fullname}</span> {activity.txt}</h2>
                            <p>{utilService.timeSince(activity.createdAt)}</p>
                        </div>
                    </section>
                })}
            </div>}
        </div>
    );
}
