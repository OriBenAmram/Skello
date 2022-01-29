import React, { useState, useEffect } from 'react';
import { IoPersonAddOutline, IoStarOutline, IoEllipsisHorizontalSharp, IoBarChart } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';


// Action
import { toggleModal, toggleSideMenu } from '../../store/app/app.action';

export function BoardHeader({ board }) {
  const { title, members } = board;
  const dispatch = useDispatch();
  const isModalOpen = useSelector(state => state.appModule.popupModal.isModalOpen)
  const [shownMembers, setShownMembers] = useState('4')

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    handleResize()

  }, [])

  const handleResize = () => {
    if (window.innerWidth < 671) {
      setShownMembers(2)
    } else if (window.innerWidth < 691) {
      setShownMembers(3)
    } else if (window.innerWidth < 711) {
      setShownMembers(4)
    }
  }

  const onToggleMenu = () => {
    dispatch(toggleSideMenu());
  };

  const onAddMemberToBoard = event => {
    dispatch(toggleModal({ event, type: 'addMemberToBoard', isShown: !isModalOpen }));
  };

  const getAvatarBackground = member => {
    return { background: `url(${member.imgUrl}) center center / cover` };
  };

  const onMemberClick = (event, member) => {
    dispatch(toggleModal({ event, type: 'otherMemberModal', member, isShown: !isModalOpen }));
  }

  const membersToShow = () => {
    const members = [...board.members]
    members.splice(shownMembers)
    return members
  }

  const getLengthOfExtraMembers = () => {
    return board.members.length - shownMembers
  }

  return (
    <header className="board-header ">
      <nav className="main-nav flex align-center justify-space-between">
        <div className="nav-left flex">
          <h1 className="header-title flex align-center justify-center">{title}</h1>
          <div className="nav-left-actions flex">
            <div className="nav-btn fav">
              <button>
                <IoStarOutline />
              </button>
            </div>
            <div className="nav-members">
              {membersToShow().map((member, index) => (
                <div
                  style={getAvatarBackground(member)}
                  className={`member-avatar`}
                  key={index}
                  onClick={event => {
                    onMemberClick(event, member);
                  }}></div>
              ))}
              {getLengthOfExtraMembers() > 0 && (
                <div className="extra-member-avatar">
                  {`+${getLengthOfExtraMembers()}`}
                </div>
              )}
            </div>
            <div
              className="nav-btn add-member"
              onClick={event => {
                onAddMemberToBoard(event);
              }}>
              <button>
                <IoPersonAddOutline />
              </button>
            </div>
          </div>
        </div>
        <div className="nav-right flex">
          <button className="nav-btn flex">
            <IoBarChart />
            <p>Dashbaord</p>
          </button>
          <button
            className="nav-btn flex"
            onClick={() => {
              onToggleMenu();
            }}>
            <IoEllipsisHorizontalSharp />
            <p>Show Menu</p>
          </button>
        </div>
      </nav>
    </header>
  );
}
