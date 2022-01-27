import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom'

import { GrClose } from 'react-icons/gr';

// Actions
import { updateTask } from '../../store/board/board.action.js';
import { toggleModal } from '../../store/app/app.action.js';

export function MembersModalContent({ board, group, task }) {
  
  const dispatch = useDispatch();
  const [searchedMemberText, setSearchedMemberText] = useState(null);
  
  const { boardId, groupId, taskId } = useParams()
  console.log('boardId, groupId, taskId:', boardId, groupId, taskId);

  const onMemberClick = member => {
    const isExists = task.members.find(currMember => currMember.fullname === member.fullname);
    if (isExists) {
      const newTaskMembers = task.members.filter(currMember => currMember.fullname !== member.fullname);
      const taskToUpdate = { ...task, members: newTaskMembers };
      const activityTxt = `removed ${member.fullname}`;
      dispatch(updateTask(board._id, group.id, task.id, taskToUpdate, activityTxt));
    } else {
      const newTaskMembers = [...task.members, member];
      const taskToUpdate = { ...task, members: newTaskMembers };
      const activityTxt = `added ${member.fullname}`;
      dispatch(updateTask(board._id, group.id, task.id, taskToUpdate, activityTxt));
    }
  };

  const getAvatarInnerText = member => {
    if (member.imgUrl) return '';
    return member.fullname.charAt(0).toUpperCase();
  };

  const getAvatarBackground = member => {
    if (member.imgUrl) return { background: `url(${member.imgUrl}) center center / cover` };
  };

  return (
    <section className="members-modal-content">
      <section className="modal-header">
        <button className="simple-close-btn" onClick={(event) => {
          dispatch(toggleModal({ event, type: 'members' }))
        }}>
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
      </section>
    </section>
  );
}
