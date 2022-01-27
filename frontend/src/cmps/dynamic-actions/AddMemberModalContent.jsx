import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { GrClose } from 'react-icons/gr';

// Actions
import { toggleModal } from '../../store/app/app.action';

// ICONS


export function AddMemberModalContent({ onToggleModal }) {
    const dispatch = useDispatch();
        const users = useSelector(state => state.userModule.users);
        console.log('users:', users);
    
    // const onAddUser = 

    return (
        <section className="members-modal-content">
            {/* <section className="modal-header">
                <button className="simple-close-btn" onClick={toggleModal}>
                    <GrClose className="btn-content" />
                </button>
                Members
            </section>
            <section className="modal-content">
                <div className="modal-title">
                    <input
                        placeholder={`Search members`}
                        type="text"
                        className="modal-main-input"
                        onChange={ev => {
                            setSearchedMemberText(ev.target.value);
                        }}
                        autoFocus
                    />
                    <h4>Board members</h4>
                    <section className="members-list">
                        {board.members.map((member, index) => {
                            return (
                                <div
                                    key={index}
                                    className="member-preview"
                                    onClick={() => {
                                        onMemberClick(member);
                                    }}>
                                    <div
                                        className={`member-avatar ${member.imgUrl ? 'with-image' : ''}`}
                                        style={getAvatarBackground(member)}>
                                        {getAvatarInnerText(member)}
                                    </div>
                                    <p>{member.fullname}</p>
                                </div>
                            );
                        })}
                    </section>
                </div>
            </section> */}
        </section>
    );
}
