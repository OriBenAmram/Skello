import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import {GrClose} from 'react-icons/gr';
import femaleGuest from '../../assets/imgs/female-guest.svg';

// Actions
import {logout} from '../../store/user/user.actions.js';
import {toggleModal} from '../../store/app/app.action';

// ICONS

export function ProfileModalContent({onToggleModal}) {
  const dispatch = useDispatch();
  const user = useSelector(state => state.userModule.loggedinUser);
  const onClickLogout = () => {
    dispatch(logout());
  };
  // const [modalType, setModalType] = useState({ header: 'Labels', type: 'labels' });

  const getUserAvatarImg = () => {
    console.log('user', user);
    return {background: `url(${user.imgUrl}) center center / cover`};
  };

  return (
    <section className="profile-modal">
      <section className="modal-header">
        <button
          className="simple-close-btn"
          onClick={event => {
            dispatch(toggleModal({event, type: 'profile'}));
            // onToggleModal({event, type: 'profile' })}
          }}>
          <GrClose className="btn-content" />
        </button>
        Account
      </section>
      <section className="modal-content">
        <section className="user-details-section">
          <div className="user-info-container">
            <div
              className={`${user?.imgUrl ? 'avatar-image' : 'expended-user-avatar'}`}
              style={getUserAvatarImg()}></div>
            <div className="user-info">
              <h2>{user.fullname}</h2>
              <span>{user.username}</span>
            </div>
          </div>
          {/* {user.fullname === 'guest' && <Link to={('/signup')}> */}
          {true && (
            <Link to={'/signup'}>
              <button
                onClick={event => {
                  onToggleModal({event, type: 'profile'});
                }}>
                Sign up with your real details
              </button>
            </Link>
          )}
        </section>
        <section className="logout-section">
          <Link to={'/signup'}>
            <button
              onClick={event => {
                onToggleModal({event, type: 'profile'});
                onClickLogout();
              }}>
              Log out
            </button>
          </Link>
        </section>
      </section>
    </section>
  );
}
