import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation, useParams } from "react-router-dom";
import { NavLink, Link } from 'react-router-dom';
import { AiFillHome } from "react-icons/ai";
import { BiBell } from "react-icons/bi";
import { ImTrello } from "react-icons/im";

// CMPS
import { DynamicActionModal } from '../cmps/dynamic-actions/DynamicActionModal.jsx'


export function AppHeader() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.userModule.loggedinUser);
  const [modal, setModal] = useState({ isModalOpen: false, type: null });
  let location = useLocation();
  let history = useHistory();

  const toggleModal = (props) => {
    const { event, type } = props
    if (modal.isModalOpen) {
      setModal({ ...modal, isModalOpen: false })
      return
    }
    setModal({ isModalOpen: true, type, event })
  }

  const onUserClick = (event) => {
    toggleModal({ event, type: 'profile' })
  }

  const onBellClick = (user) => {

  }

  const isHome = location.pathname === '/'
  const isLoginSignup = (location.pathname === '/login' || location.pathname === '/signup') ? true : false
  const isBoard = location.pathname.includes('board');

  return (
    <header className={`app-header ${(isBoard) ? 'board' : ''} ${(isHome) ? 'home' : 'general'} ${(isLoginSignup) ? 'login-signup' : ''}`}>
      <section className='nav-options'>
        {!isHome && <NavLink className='home-icon-container' exact to="/">
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
        <div className='member-avatar' style={{ backgroundColor: '#eb5a46' }} onClick={(event) => {
          onUserClick(event)
        }}>
          {user.fullname.charAt(0).toUpperCase}
        </div>
      </section>}
      {modal.isModalOpen && <DynamicActionModal posXAddition={-290} posYAddition={10} toggleModal={toggleModal} type={'profile'} event={modal.event} />}
    </header>
  );
}