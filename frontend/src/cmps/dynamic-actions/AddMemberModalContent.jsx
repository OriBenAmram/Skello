import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import {GrClose} from 'react-icons/gr';

// Actions
import {onSaveBoard} from '../../store/board/board.action';
import {loadUsers} from '../../store/user/user.actions';

// ICONS

export function AddMemberModalContent({onToggleModal}) {
  const dispatch = useDispatch();
  const members = useSelector(state => state.userModule.users);
  const board = useSelector(state => state.boardModule.board);
  const [filterBy, setFilterBy] = useState(null);

  useEffect(() => {
    onLoadUsers();
  }, []);

  const onLoadUsers = () => {
    dispatch(loadUsers());
  };

  const onAddMemberToBoard = (event, member) => {
    const memberIdx = members.findIndex(memberToFind => {
      return memberToFind._id === member._id;
    });

    if (memberIdx >= 0) {
      const newBoard = {...board, members: [...board.members, member]};
      dispatch(onSaveBoard(newBoard));
      onToggleModal({event, type: 'addMemberToBoard'});
    }
  };

  const getAvatarBackground = member => {
    if (member.imgUrl) return {background: `url(${member.imgUrl}) center center / cover`};
  };

  const isMemberInBoard = id => {
    return board.members.some(member => {
      return member._id === id;
    });
  };

  const getMembersForDisplay = () => {
    if (filterBy) {
      console.log('filterBy', filterBy);
      return members.filter(member => {
        if (member._id !== board.createdBy._id && !isMemberInBoard(member._id)) {
          return member.fullname.toUpperCase().includes(filterBy.toUpperCase());
        }
      });
    } else {
      const membersToShow = [];
      for (let allMember of members) {
        if (!isMemberInBoard(allMember._id) && allMember._id !== board.createdBy._id) {
          membersToShow.push(allMember);
        }
      }
      return membersToShow;
    }
  };

  return (
    <section className="users-modal-content">
      <section className="modal-header">
        <button
          className="simple-close-btn"
          onClick={event => {
            onToggleModal({event, type: 'addMemberToBoard'});
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
            onChange={ev => {
              setFilterBy(ev.target.value);
            }}
            autoFocus
          />
          <h4>Board Members</h4>
          <section className="users-list">
            {getMembersForDisplay().map((member, index) => {
              return (
                <div
                  key={index}
                  className="user-preview"
                  onClick={event => {
                    onAddMemberToBoard(event, member);
                  }}>
                  <div
                    className={`member-avatar ${member.imgUrl ? 'with-image' : ''}`}
                    style={getAvatarBackground(member)}></div>
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
