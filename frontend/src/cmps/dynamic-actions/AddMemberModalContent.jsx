import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { GrClose } from 'react-icons/gr';

// Actions
import { toggleModal } from '../../store/app/app.action';
import { onSaveBoard } from '../../store/board/board.action';
// ICONS


export function AddMemberModalContent({ onToggleModal }) {
    const dispatch = useDispatch();
    const users = useSelector(state => state.userModule.users);
    const board = useSelector(state => state.boardModule.board);
    const [searchedUserText, setSearchedUserText] = useState(null);
    console.log('users:', users);
    console.log('searchedUserText:', searchedUserText);

    const onClickUser = (event, user) => {
        const memberIdx = board.members.findIndex((member) => {
            return member.fullname === user.fullname
        })
        if (memberIdx) {
            console.log('memberIdx:', memberIdx);
            board.members.splice(1, memberIdx )
            dispatch(onSaveBoard(board))
            onToggleModal({ event, type: 'addMemberToBoard' })

        } else {
            board.members.unshift(user)
            dispatch(onSaveBoard(board))
            onToggleModal({ event, type: 'addMemberToBoard' })
        }
    }

    const getAvatarBackground = user => {
        if (user.imgUrl) return { background: `url(${user.imgUrl}) center center / cover` };
    };

    return (
        <section className="users-modal-content">
            <section className="modal-header">
                <button className="simple-close-btn" onClick={(event) => {
                    onToggleModal({ event, type: 'addMemberToBoard' })
                }}>
                    <GrClose className="btn-content" />
                </button>
                Invite to board
            </section>
            <section className="modal-content">
                <div className="modal-title">
                    <input
                        placeholder={`Search users`}
                        type="text"
                        className="modal-main-input"
                        onChange={(ev) => {
                            setSearchedUserText(ev.target.value);
                        }}
                        autoFocus
                    />
                    <h4>Board users</h4>
                    <section className="users-list">
                        {users.map((user, index) => {
                            return (
                                <div
                                    key={index}
                                    className="user-preview"
                                    onClick={(event) => {
                                        onClickUser(event, user);
                                    }}>
                                    <div
                                        className={`member-avatar ${user.imgUrl ? 'with-image' : ''}`}
                                        style={getAvatarBackground(user)}>
                                    </div>
                                    <p>{user.fullname}</p>
                                </div>
                            );
                        })}
                    </section>
                </div>
            </section>
        </section>
    );
}
