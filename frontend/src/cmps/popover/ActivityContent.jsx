import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { AiOutlineBars } from 'react-icons/ai';


// Action
import { toggleModal, toggleSideMenu } from '../../store/app/app.action.js';

// Services
import { utilService } from '../../services/util.service.js'

export function ActivityContent({ isSideBarOpen, toggleSideMenu }) {
  const dispatch = useDispatch();
  let history = useHistory();
  const board = useSelector(state => state.boardModule.board);

  const toggleMenuContent = (menuContent) => {
  }

  const getAvatarBackground = (member) => {
    return { background: `url(${member.imgUrl}) center center / cover` }
  }

  const onClickGroup = (groupId, taskId) => {
    history.push(`/board/${board._id}/${groupId}/${taskId}`)
  }

  const onMemberClick = (event, member) => {
    dispatch(toggleModal({ event, type: 'otherMemberModal', member }));
  }

  return (
    <section className='activity-section'>
      <section className='activity-container'>
        <button className='primary-link-btn activity-list-btn' onClick={() => {
          toggleMenuContent('activity')
        }}>
          <AiOutlineBars className='primary-icon' />
          Activities
        </button>

        {board?.activities.length > 0 && <div>
          {board.activities.map(activity => {

            if (activity.isComment) {
              return <section key={activity.id} className='activity-preview'>
                <div className={`member-avatar ${(activity.member.imgUrl) ? 'with-image' : ''}`} style={getAvatarBackground(activity.member)} onClick={(event) => {
                  onMemberClick(event, activity.member)
                }}>
                </div>
                <div className='activity-info'>
                  <h2> <span>{activity.member.fullname}</span> on <span className='group-link in-comment' onClick={() => {
                    onClickGroup(activity.group.id, activity.task.id)
                  }}>{activity.group.title}</span> <span className='time-mention'>{utilService.timeSince(activity.createdAt)}</span> </h2>
                  <div className='comment-preview' onClick={() => {
                    onClickGroup(activity.group.id, activity.task.id)
                  }}>
                    {activity.txt}
                  </div>
                </div>
              </section>
            }
            else return <section key={activity.id} className='activity-preview'>
              <div className={`member-avatar ${(activity.member.imgUrl) ? 'with-image' : ''}`} style={getAvatarBackground(activity.member)} onClick={(event) => {
                onMemberClick(event, activity.member)
              }}>
              </div>
              <div className='activity-info'>
                <h2> <span>{activity.member.fullname}</span> {activity.txt} in group <span className='group-link' onClick={() => {
                  onClickGroup(activity.group.id, activity.task.id)
                }}>{activity.group.title}</span> </h2>
                <p>{utilService.timeSince(activity.createdAt)}</p>
              </div>
            </section>
          })}
        </div>}
      </section>
    </section>

  );
}