import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { AiFillHome } from "react-icons/bs";
// import { BsGrid3X3Gap } from 'react-icons/fa';

export class _AppHeader extends React.Component {
  state = {};

  componentDidMount() { }

  render() {
    // const {user} = this.props;
    return (
      <header className="app-header">
        <section>
          <NavLink exact to="/">
            {/* <AiFillHome /> */}
            Home
          </NavLink>
          <NavLink exact to="/workspace">
            Skello
          </NavLink>
          <NavLink exact to="/board/:321">
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
