import React, { useState, useEffect } from 'react';
import { IoPersonAddOutline, IoStarOutline, IoEllipsisHorizontalSharp, IoBarChart } from 'react-icons/io5';
import { useDispatch } from 'react-redux';

// Cmps
import { DynamicActionModal } from '../dynamic-actions/DynamicActionModal.jsx'

// action

import { toggleSideMenu } from '../../store/app/app.action';

export function BoardHeader({ board }) {
  const { title, members } = board;
  const dispatch = useDispatch()
  const [modal, setModal] = useState({ isModalOpen: false, type: null });

  const toggleModal = (props) => {
    const { event, type } = props
    if (modal.isModalOpen) {
      setModal({ ...modal, isModalOpen: false })
      return
    }
    setModal({ isModalOpen: true, type, event })
  }

  const onToggleMenu = () => {
    dispatch(toggleSideMenu())
  }

  const onAddMemberToBoard = (event) => {
    toggleModal({ event, type: 'profile' })
  }

  const getAvatarBackground = (member) => {
    return { background: `url(${member.imgUrl}) center center / cover` }
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
            <div className="nav-members flex">
              {members.map(member => (
                <div style={getAvatarBackground(member)} className={`member-avatar`} key={member._id}>
                </div>
              ))}
            </div>
            <div className="nav-btn add-member" onClick={(event) => {
              onAddMemberToBoard(event)
            }}>
              <button>
                <IoPersonAddOutline />
              </button>
            </div>
          </div>
        </div>
        <div className="nav-right flex">
          <button className="nav-btn flex">
            <IoBarChart /> Dashbaord
          </button>
          <button className="nav-btn flex" onClick={() => {
            onToggleMenu()
          }}>
            <IoEllipsisHorizontalSharp /> Show Menu
          </button>
        </div>
      </nav>
      {modal.isModalOpen && <DynamicActionModal posXAddition={-290} posYAddition={10} toggleModal={toggleModal} type={'profile'} event={modal.event} />}
    </header>
  );
}
