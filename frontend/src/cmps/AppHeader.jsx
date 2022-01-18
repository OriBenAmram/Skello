import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { AiFillHome } from "react-icons/ai";
import { ImTrello } from "react-icons/im";
// import { BsGrid3X3Gap } from 'react-icons/fa';

export class _AppHeader extends React.Component {
  state = {};

  componentDidMount() { }

  render() {
    // const {user} = this.props;
    return (
      <header className="app-header">
        <section className='nav-options'>
          <NavLink exact to="/">
            <AiFillHome className='home-icon' />
          </NavLink>
          <NavLink className='logo clean-link' exact to="/workspace">
          <ImTrello />Skello
          </NavLink>
          <NavLink className='boards clean-link' exact to="/board/:321">
            Boards
          </NavLink>
        </section>
        <section>
          {/* <h1 style={{backgroundColor: 'lightgrey', height: 100}}>
            im Header <br />
          </h1> */}
        </section>
      </header>
    );
  }
}

function mapStateToProps({ userModule }) {
  return {
    // user: userModule.user,
  };
}

const mapDispatchToProps = {
  //   login,
  //   logout,
};

export const AppHeader = connect(mapStateToProps, mapDispatchToProps)(_AppHeader);
