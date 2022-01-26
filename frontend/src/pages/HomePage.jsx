import React from 'react';
import {connect} from 'react-redux';
import heroImg from '../assets/imgs/hero.png';

// Action
import {login} from '../store/user/user.actions';

export class _HomePage extends React.Component {
  render() {
    console.log('props', this.props);
    return (
      <section className="homepage">
        <div className="hero flex">
          <div className="hero-content flex column">
            <h1>Skello helps teams move work forward.</h1>
            <p>
              Collaborate, manage projects, and reach new productivity peaks. From high rises to the home
              office, the way your team works is unique—accomplish it all with Trello.
            </p>
            <button
              onClick={() => {
                this.props.login({username: 'guest', password: 'guest123'});
                this.props.history.push('/workspace');
              }}>
              Start Demo
            </button>
          </div>
          <div>
            <img className="hero-img" src={heroImg} alt="" />
          </div>
        </div>
      </section>
    );
  }
}

const mapDispatchToProps = {
  login,
};

export const HomePage = connect(null, mapDispatchToProps)(_HomePage);
