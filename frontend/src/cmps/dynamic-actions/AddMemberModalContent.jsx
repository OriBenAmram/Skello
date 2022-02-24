import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import QRCode from "react-qr-code";

// Actions
import { toggleModal } from '../../store/app/app.action';
import { onSaveBoard } from '../../store/board/board.action';
import { loadUsers } from '../../store/user/user.actions';

// ICONS
import { GrClose } from 'react-icons/gr';

export function AddMemberModalContent({ onToggleModal, extraMembers, isExtra }) {
  const dispatch = useDispatch();
  let location = useLocation()
  const members = useSelector(state => state.userModule.users);
  const board = useSelector(state => state.boardModule.board);
  const [filterBy, setFilterBy] = useState(null);
  const [isQRShown, setIsQRShown] = useState(false);

  useEffect(() => {
    onLoadUsers();
  }, []);

  useEffect(() => {
    if (location.pathname !== `/board/${board._id}`) {
      dispatch(toggleModal({ event: null, type: null }))
    }
  }, [location]);

  const onLoadUsers = () => {
    dispatch(loadUsers());
  };

  const onAddMemberToBoard = (event, member) => {
    if (isExtra) return;

    const memberIdx = members.findIndex(memberToFind => {
      return memberToFind._id === member._id;
    });

    if (memberIdx >= 0) {
      const newBoard = { ...board, members: [...board.members, member] };
      dispatch(onSaveBoard(newBoard));
      onToggleModal({ event, type: 'addMemberToBoard' });
    }
  };

  const getAvatarBackground = member => {
    if (member.imgUrl) return { background: `url(${member.imgUrl}) center center / cover` };
  };

  const isMemberInBoard = (id) => {
    return board?.members.some(member => {
      return member._id === id;
    });
  };

  const getMembersForDisplay = () => {
    if (isExtra) {
      return extraMembers;
    }

    if (filterBy) {
      return members.filter(member => {
        if (member._id !== board?.createdBy._id && !isMemberInBoard(member._id)) {
          return member.fullname.toUpperCase().includes(filterBy.toUpperCase());
        }
      });
    } else {
      const membersToShow = [];
      for (let allMember of members) {
        if (!isMemberInBoard(allMember._id) && allMember._id !== board?.createdBy._id) {
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
          onClick={event => { onToggleModal({ event, type: 'addMemberToBoard' }); }}
        >
          <GrClose className="btn-content" />
        </button>

        <span>{(isExtra) ? 'More members' : 'Invite to board'}</span>
      </section>

      <section className="modal-content">
        <div className="modal-title">
          {!isExtra && <input
            placeholder={`Search users`}
            type="text"
            className="modal-main-input"
            onChange={ev => { setFilterBy(ev.target.value); }}
            autoFocus
          />
          }

          <div className="flex justify-space-between">
            <h4 onClick={() => { setIsQRShown(false) }}>Board Members</h4>
            {!isExtra && <h4
              className="invite"
              onClick={() => { setIsQRShown(prevIsQRShown => !prevIsQRShown) }}
            >
              invite to board
            </h4>
            }
          </div>

          {!isQRShown && <section className="users-list">
            {getMembersForDisplay().map((member, index) => {
              return (
                <div
                  key={index}
                  className="user-preview"
                  onClick={event => {
                    (isExtra) ?
                      dispatch(toggleModal({
                        event, type: 'otherMemberModal', member, isShown: true,
                        posYAddition: -150, posXAddition: -200
                      })) :
                      onAddMemberToBoard(event, member)
                  }}>

                  <div
                    className={`member-avatar ${member.imgUrl ? 'with-image' : ''}`}
                    style={getAvatarBackground(member)}></div>
                  <p>{member.fullname}</p>
                </div>
              );
            })}
          </section>}

          {isQRShown && <section className="qr-code flex justify-center">
            <QRCode value={`https://skello.herokuapp.com/board/${board._id}`} />
          </section>}
        </div>
      </section>
    </section>
  );
}
