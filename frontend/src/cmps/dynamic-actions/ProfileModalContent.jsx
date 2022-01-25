import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { GrClose } from 'react-icons/gr';


// Actions
import { logout } from '../../store/user/user.actions.js';

// ICONS


export function ProfileModalContent({ toggleModal }) {
    const dispatch = useDispatch();
    const user = useSelector(state => state.userModule.loggedinUser);
    const onClickLogout = () => { 
        console.log('logging out')
        dispatch(logout())
    }
    // const [modalType, setModalType] = useState({ header: 'Labels', type: 'labels' });

    return (
        <section className='profile-modal'>
            <section className='modal-header'>
                <button className='simple-close-btn' onClick={toggleModal}><GrClose className='btn-content' /></button>
                Account
            </section>
            <section className='modal-content'>
                <section className='user-details-section'>
                    <div className='user-info-container'>
                        <div className='expended-user-avatar'>

                        </div>
                        <div className='user-info'>
                            <h2>Ori Ben Amram</h2>
                            <span>benamram.ori@gmail.com</span>
                        </div>
                    </div>
                     {/* {user.fullname === 'guest' && <Link to={('/signup')}> */}
                     {true && <Link to={('/signup')}>
                        <button onClick={toggleModal}>Sign up with your real details</button>
                    </Link>}
                </section>
                <section className='logout-section'>
                    <Link to={('/signup')}>
                        <button onClick={(event) => {
                            toggleModal(event)
                            onClickLogout()
                        }}>Log out</button>
                    </Link>
                </section>
            </section>
        </section>
    );
}
