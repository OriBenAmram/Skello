import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { GrClose } from 'react-icons/gr';

// ICONS

export function OtherMemberModalContent({ onToggleModal, member }) {
    const dispatch = useDispatch();
    const user = useSelector(state => state.userModule.loggedinUser);
    const onClickOtherMemberImage = () => {
        console.log('member:', member);
    };

    const getAvatarByUser = () => {
        return { background: `url(${member.imgUrl}) center center / cover` };
    };

    return (
        <section className="other-member-modal-content">
            <button className="simple-close-btn" onClick={(event) => {
                    onToggleModal({ event, type: 'otherMemberModal' })
                }}>
                    x
                </button>
            <div className='upper-section'>
                <div style={getAvatarByUser()} className='other-member-expended-avatar'></div>
                <div className='user-unfo'>
                    <h2>{member.fullname}</h2>
                    <p>{member.username}</p>
                </div>
            </div>
            <div className='lower-section'>
                <button onClick={() => {
                    console.log(`Todo - remove the member ${member.fullname} from board`)
                }}>Remove from board</button>
            </div>
        </section>
    );
}
