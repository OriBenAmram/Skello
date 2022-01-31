import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { NavLink, Link } from 'react-router-dom';
import { AiFillHome, AiOutlineDown } from 'react-icons/ai';
import { ImTrello } from 'react-icons/im';


// Services
import { userService } from '../services/user.service';


// Actions
import { loadUsers, setUser } from '../store/user/user.actions.js';
import { toggleModal } from '../store/app/app.action';

// cmps
import { SkellMicAssistant } from './SkellMicAssistence';



export function AppHeader() {
  const dispatch = useDispatch();
  let location = useLocation();
  const isModalOpen = useSelector(state => state.appModule.popupModal.isModalOpen)
  const user = useSelector(state => state.userModule.loggedinUser)

  useEffect(() => {
    getLoggedInUser()
    dispatch(loadUsers())
  }, [])


  const getLoggedInUser = async () => {
    const loggedInUser = userService.getLoggedinUser() || await userService.loginAsGuest()
    dispatch(setUser(loggedInUser))
  }

  const onUserClick = event => {
    dispatch(toggleModal({ event, type: 'profile', posXAddition: -300, isShown: !isModalOpen }));
  };

  const onClickBoards = (ev) => {
    dispatch(toggleModal({ event: ev, type: 'profile', posYAddition: 20, isShown: !isModalOpen }));
  }


  const getAvatarByUser = () => {
    return { background: `url(${user.imgUrl}) center center / cover` };
  };
  const isHome = location.pathname === '/';
  const isLoginSignup = location.pathname === '/login' || location.pathname === '/signup' ? true : false;
  const isBoard = location.pathname.includes('board');

  console.log('RENDERING')

  return (
    <header
      className={`app-header ${isBoard ? 'board' : ''} ${isHome ? 'home' : 'general'} ${isLoginSignup ? 'login-signup' : ''
        }`}>
      <section className="nav-options">
        {!isHome && !user && (
          <NavLink className="home-icon-container" exact to="/">
            <AiFillHome className="home-icon" />
          </NavLink>
        )}
        <NavLink className="logo-container clean-link" exact to="/workspace">
          <ImTrello className="trello-icon" />
          <p className="logo">Skello</p>
        </NavLink>
        <button className={`app-header-primary-btn `} onClick={(ev) => {
          onClickBoards(ev)
        }}>
          Boards
          <AiOutlineDown className='dropdown-icon' />
        </button>
      </section>


      {/* STT */}
      <SkellMicAssistant />


      {/* HOME */}


      {(!user || isHome) && (
        <section className="login-signup-container">
          <Link to={'/login'}>
            <button className="login-btn">Log in</button>
          </Link>
          <Link to={'/signup'}>
            <button className="signup-btn">Sign up</button>
          </Link>
        </section>
      )}
      {user && !isHome && (
        <section className="user-section">
          {/* <div className='bell-icon-container' onClick={() => { 
            onBellClick()
          }}><BiBell className='bell-icon'/></div> */}
          <div
            className={`${user?.imgUrl ? 'avatar-image' : 'member-avatar'}`}
            style={getAvatarByUser()}
            onClick={event => {
              onUserClick(event);
            }}>
            {/* {user.fullname.charAt(0).toUpperCase} */}
          </div>
        </section>
      )}
    </header>
  );
}
