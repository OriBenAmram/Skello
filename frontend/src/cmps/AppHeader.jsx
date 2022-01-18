import React from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';

export class _AppHeader extends React.Component {
  state = {};

  componentDidMount() {}

  //   onLogout = ev => {
  //     ev.preventDefault();
  //     this.props.logout();
  //     window.location.assign('/toy');
  //   };

  render() {
    // const {user} = this.props;
    return (
      <header className="app-header">
        <section></section>
        <section></section>
        {/* <NavLink className="logo" exact to="/">
            MisterToy
          </NavLink> */}
      </header>
    );
  }
}

function mapStateToProps({userModule}) {
  return {
    // user: userModule.user,
  };
}

const mapDispatchToProps = {
  //   login,
  //   logout,
};

export const AppHeader = connect(mapStateToProps, mapDispatchToProps)(_AppHeader);
