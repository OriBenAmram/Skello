import React from 'react';
import { connect } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import { withRouter } from "react-router";
import { AiFillHome } from "react-icons/ai";
import { ImTrello } from "react-icons/im";

export class _AppHeader extends React.Component {
  state = {};

  componentDidMount() {
  }

  render() {
    const isHome = this.props.location.pathname === '/'
    const isLoginSignup = (this.props.location.pathname === '/login' || this.props.location.pathname === '/signup' ) ? true : false
    const isBoard = this.props.location.pathname.includes('board');
    const { user, board } = this.props;    
    
    return (
      <header className={`app-header ${(isBoard) ? 'board' : ''} ${(isHome) ? 'home' : 'general'} ${(isLoginSignup) ? 'login-signup' : ''}`}>
        <section className='nav-options'>
          {!isHome && <NavLink className='home-icon-container' exact to="/">
            <AiFillHome className='home-icon' />
          </NavLink>}
          <NavLink className='logo-container clean-link' exact to="/workspace">
            <ImTrello className='trello-icon' /><p className='logo'>Skello</p>
          </NavLink>
          {/* <NavLink className='boards-selector clean-link' exact to={`/workspace`}>
            Workspace
          </NavLink> */}
        </section>

        {/* {!user && <section className='user-general-options'>
            <input type="text" className='app-filter'/>
            <button className='user-icon'>
              {(user) ? `${user.fullname.charAt(0).toUpperCase()}` : ''}
            </button>
        </section>} */}

        {/* HOME */}
        {<section className='login-signup-container'>
          <Link to={('/login')}>
            <button className='login-btn'>Log in</button>
          </Link>
          <Link to={('/signup')}>
            <button className='signup-btn'>Signup</button>
          </Link>
        </section>}
      </header>
    );
  }
}

function mapStateToProps({ boardModule }) {
  return {
    board: boardModule.board,
  };
}

const mapDispatchToProps = {
};

export const AppHeader = withRouter(connect(mapStateToProps, mapDispatchToProps)(_AppHeader))
