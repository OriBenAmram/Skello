import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { AiOutlineBars } from 'react-icons/ai';
import { HiOutlineSearch } from 'react-icons/hi';
import { MdOutlinePhotoCameraBack } from 'react-icons/md';

// Cmps
import { ActivityContent } from './ActivityContent.jsx'

// Action
import { toggleModal, toggleSideMenu } from '../store/app/app.action.js';

// Services
import { utilService } from '../services/util.service.js'

export function PopoverSideMenu({ isSideBarOpen, toggleSideMenu }) {
  const dispatch = useDispatch();
  const [isSearchOpen, setSearchState] = useState(false)
  const [searchText, setSearchText] = useState(null)
  // const [, setSearchText] = useState(null)

  let location = useLocation();
  let history = useHistory();
  const board = useSelector(state => state.boardModule.board);

  const toggleMenuContent = (menuContent) => {
    console.log('What did you expect?')
  }

  const getAvatarBackground = (member) => {
    return { background: `url(${member.imgUrl}) center center / cover` }
  }

  const onClickGroup = (groupId, taskId) => {
    history.push(`/board/${board._id}/${groupId}/${taskId}`)
  }

  useEffect(() => {
    if (isSideBarOpen && location.pathname !== `/board/${board._id}`) toggleSideMenu();

  }, [location])

  const onMemberClick = (event, member) => {
    console.log(`member ${member.fullname} clicked in event`, event)
    dispatch(toggleModal({ event, type: 'otherMemberModal', member }));
  }

  return (
    <section className="popover-side-menu" style={isSideBarOpen ? { right: '0px' } : { right: '-400px' }}>
      {/* Header */}
      <div className="popover-header flex align-center">
        <button className='primary-close-btn'
          onClick={() => {
            toggleSideMenu();
          }}>
          x
        </button>
        <span>Menu</span>
        <hr className='bottom-hr' />
      </div>
      <section className='sidemenu-main-content'>
        {/* Upper Options */}
        <section className='upper-sidemenu-options'>
          <button className='primary-link-btn' onClick={() => {
            setSearchState(!isSearchOpen)
          }}>
            <HiOutlineSearch className='primary-icon' />
            Filter cards
          </button>
          <input autoFocus type="text" className={`primary-input filter-cards-input ${(isSearchOpen) ? 'open' : 'closed'}`} onChange={(ev) => {
            setSearchText(ev.target.value)
          }} />
          <button className='primary-link-btn'>
            <MdOutlinePhotoCameraBack className='primary-icon' />
            Change background
          </button>
        </section>
        <section className='background-teaser-section'>

        </section>
        <ActivityContent />
      </section>

    </section>
  );
}
