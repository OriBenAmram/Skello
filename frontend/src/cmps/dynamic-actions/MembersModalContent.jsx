import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Icons & SVG
import femaleGuest from '../../assets/imgs/female-guest.svg';
import { GrClose } from "react-icons/gr";

// Actions
import { updateTask, onSaveBoard } from '../../store/board/board.action.js';

export function MembersModalContent({ board, group, task, toggleModal }) {
    const dispatch = useDispatch();
    const [searchedMemberText, setSearchedMemberText] = useState(null);

    const onMemberClick = (member) => {
        const isExists = task.members.find(currMember => currMember.fullname === member.fullname)
        if (isExists) {
            const newTaskMembers = task.members.filter(currMember => currMember.fullname !== member.fullname)
            const taskToUpdate = { ...task, members: newTaskMembers }
            const activityTxt = `removed ${member.fullname}`
            dispatch(updateTask(board._id, group.id, task.id, taskToUpdate, activityTxt));

        } else {
            const newTaskMembers = [...task.members, member]
            const taskToUpdate = { ...task, members: newTaskMembers }
            const activityTxt = `added ${member.fullname}`
            dispatch(updateTask(board._id, group.id, task.id, taskToUpdate, activityTxt));
        }
    }

    const getAvatarInnerText = (member) => {
        if (member.imgUrl) return ''
        return member.fullname.charAt(0).toUpperCase()
    }

    const getAvatarBackground = (member) => {
        if (!member) return {}
        if (member.fullname === 'Guest') return { background: `url(${femaleGuest}) center center / cover` }
        if (member.url) return { background: `url(${member.url}) center center / cover` }
        return { backgroundColor: member.color }
    }


    return (
        <section className='members-modal-content'>
            <section className='modal-header'>
                <button className='simple-close-btn' onClick={toggleModal}><GrClose className='btn-content' /></button>
                Members
            </section>
            <section className='modal-content'>
                <div className='modal-title'>
                    <input placeholder={`Search members`} type="text" className='modal-main-input' onChange={(ev) => {
                        setSearchedMemberText(ev.target.value)
                    }} autoFocus />
                    <h4>Board members</h4>
                    <section className='members-list'>
                        {board.members.map(member => {
                            return <div className='member-preview' onClick={() => {
                                onMemberClick(member)
                            }}>
                                <div className={`member-avatar ${(member.imgUrl) ? 'with-image' : ''}`} style={getAvatarBackground(member)}>
                                    {getAvatarInnerText(member)}
                                </div>
                                <p>{member.fullname}</p>
                            </div>
                        })}
                    </section>
                </div>
            </section>
        </section>
    );
}
