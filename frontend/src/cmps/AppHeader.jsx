import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from "react-router-dom";
import femaleGuest from '../assets/imgs/female-guest.svg';
import { NavLink, Link } from 'react-router-dom';
import { AiFillHome } from "react-icons/ai";
import { BiBell } from "react-icons/bi";
import { ImTrello } from "react-icons/im";

// Actions
import { toggleModal } from '../store/app/app.action';

export function AppHeader() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.userModule.loggedinUser);
  let location = useLocation();

  const onUserClick = (event) => {
    console.log('event:', event);
    
    dispatch(toggleModal({ event, type: 'profile', posXAddition: -300 }))
  }

  const getAvatarByUser = () => {
    return { background: `url(${user.imgUrl}) center center / cover` }
  }
    const isHome = location.pathname === '/'
    const isLoginSignup = (location.pathname === '/login' || location.pathname === '/signup') ? true : false
    const isBoard = location.pathname.includes('board');

    return (
      <header className={`app-header ${(isBoard) ? 'board' : ''} ${(isHome) ? 'home' : 'general'} ${(isLoginSignup) ? 'login-signup' : ''}`}>
        <section className='nav-options'>
          {!isHome && !user && <NavLink className='home-icon-container' exact to="/">
            <AiFillHome className='home-icon' />
          </NavLink>}
          <NavLink className='logo-container clean-link' exact to="/workspace">
            <ImTrello className='trello-icon' /><p className='logo'>Skello</p>
          </NavLink>
        </section>

        {/* HOME */}
        {(!user || isHome) && <section className='login-signup-container'>
          <Link to={('/login')}>
            <button className='login-btn'>Log in</button>
          </Link>
          <Link to={('/signup')}>
            <button className='signup-btn'>Sign up</button>
          </Link>
        </section>}
        {(user && !isHome) && <section className='user-section'>
          {/* <div className='bell-icon-container' onClick={() => { 
            onBellClick()
          }}><BiBell className='bell-icon'/></div> */}
          <div className={`${(user?.imgUrl) ? 'avatar-image' : 'member-avatar'}`} style={getAvatarByUser()} onClick={(event) => {
            onUserClick(event)
          }}>
            {user.fullname.charAt(0).toUpperCase}
          </div>
        </section>}
      </header>
    );
  }