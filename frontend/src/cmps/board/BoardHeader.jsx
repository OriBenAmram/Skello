import React, { useState, useEffect } from 'react';
import { IoPersonAddOutline, IoStarOutline, IoEllipsisHorizontalSharp, IoBarChart } from 'react-icons/io5';
import { useDispatch } from 'react-redux';

// Cmps

// action

import { toggleSideMenu } from '../../store/app/app.action';

export function BoardHeader({ board }) {
  const { title, members } = board;
  const dispatch = useDispatch()

  
  const onToggleMenu = () => {
    dispatch(toggleSideMenu())
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
                <div style={{ backgroundColor: member.color }} className="member-avatar" key={member._id}>
                  {member.fullname.charAt(0).toUpperCase()}
                </div>
              ))}
            </div>
            <div className="nav-btn add-member">
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
    </header>
  );
}
