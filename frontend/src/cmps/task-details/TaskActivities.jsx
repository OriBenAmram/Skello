import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Cmps
import { DynamicActionModal } from '../dynamic-actions/DynamicActionModal.jsx'

// Services
import { utilService } from '../../services/util.service.js'

// Icons
import femaleGuest from '../../assets/imgs/female-guest.svg';
import { AiOutlineCreditCard, AiOutlineBars } from "react-icons/ai";
import { BiSmile } from "react-icons/bi";
import { MdOutlineAttachment } from "react-icons/md"
import { GoMention } from "react-icons/go"

export function TaskActivities({ board, group, task, description }) {

    const [isTextAreaOpen, toggleTextArea] = useState(false);
    const [textAreaContent, setTextAreaContent] = useState('');
    const [isActivityListShown, toggleActivityList] = useState(true);
    const [modal, setModal] = useState({ isModalOpen: false, type: null });

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

    return (
        <div className='activity-container'>
            <div className='title-container'>
                <AiOutlineBars className='primary-icon main-content-icon' />
                <h3>Activity</h3>
                <button className="details-primary-link-btn" onClick={() => onToggleActivityList()}>{(isActivityListShown) ? 'Hide Details' : 'Shown Details'}</button>
            </div>
            <div className='text-area-container'>
                <textarea defaultValue="" onClick={() => toggleTextArea(true)} onBlur={() => toggleTextArea(false)} className='input-activity-box comment-general-box' placeholder="Write a comment..." onChange={(ev) => {
                    setTextAreaContent(ev.target.value)
                }}>
                </textarea>
                {isTextAreaOpen && <section>
                    <button className={`save-btn ${(textAreaContent) ? 'activate' : ''}`}>Save</button>
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
                    return <section key={activity.id} className='activity-preview'>
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
