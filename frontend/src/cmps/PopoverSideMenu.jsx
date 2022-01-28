import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { MdClose } from "react-icons/md";

// cmps
import { PopoverBgPicker } from './popover/PopoverBgpicker';
import { PopOverMainContent } from './popover/PopOverMainContent';


// Cmps
import { ActivityContent } from './popover/ActivityContent.jsx'

// Action
import { toggleModal, toggleSideMenu } from '../store/app/app.action.js';

// Services
import { utilService } from '../services/util.service.js'

export function PopoverSideMenu({ isSideBarOpen, toggleSideMenu }) {
  const dispatch = useDispatch();
  const [isSearchOpen, setSearchState] = useState(false)
  const [searchText, setSearchText] = useState(null)
  const [popoverContent, setPopoverContent] = useState('main')

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
    dispatch(toggleModal({ event, type: 'otherMemberModal', member }));
  }

  console.log('popoverContent:', popoverContent);

  return (
    <section className="popover-side-menu" style={isSideBarOpen ? { right: '0px' } : { right: '-400px' }}>
      {(popoverContent === 'main') && <PopOverMainContent setSearchText={setSearchText} setSearchState={setSearchState} searchText={searchText} isSearchOpen={isSearchOpen} toggleSideMenu={toggleSideMenu} isSideBarOpen={isSideBarOpen} setPopoverContent={setPopoverContent} />}
      {(popoverContent === 'color' || popoverContent === 'image') &&
        < PopoverBgPicker setPopoverContent={setPopoverContent} popoverContent={popoverContent} isSideBarOpen={isSideBarOpen} toggleSideMenu={toggleSideMenu} />}
    </section>
  );
}
