import {useState} from 'react';
import {connect} from 'react-redux';
import {useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import googleIcon from '../assets/imgs/google-icon.svg';
import femaleGuest from '../assets/imgs/female-guest.svg';
import leftHero from '../assets/imgs/left-loginsignup-hero.svg';
import rightHero from '../assets/imgs/right-loginsignup-hero.svg';
import {ImTrello} from 'react-icons/im';

// Services
import { userService } from '../services/user.service';

// Actions
import {login, signup} from '../store/user/user.actions';

export function LoginSignup(props) {
  const dispatch = useDispatch();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [fullname, setFullname] = useState('');
  // const [isLogin, setIsLogin] = useState(true);
  const isLogin = props.location.pathname.includes('login');

  const handleSubmit = async ev => {
    ev.preventDefault();
    if (username.trim() && password.trim()) {
      if (!isLogin) {
        await dispatch(signup({username, password, fullname, imgUrl: ''}));
        await dispatch(login({username, password}));
        props.history.push('/workspace');
      } else {
        await dispatch(login({username, password}));
        props.history.push('/workspace');
      }
    }
  };

  const onClickGuest = async () => {
    await dispatch(login({
        username: 'guest',
        password: 'guest123',
      })
    );
    props.history.push('/workspace');
  };

  return (
    <div className="login-signup">
      <div className="login-header">
        <ImTrello className="trello-icon" />
        <h1 className="logo">Skello</h1>
      </div>
      <div className="login-signup-inner-section">
        <div className="main-content-modal">
          <h1>{isLogin ? 'Login to Skello' : 'Sign up for your account'}</h1>
          <form className="login-signup-form" onSubmit={handleSubmit}>
            <input
              required
              type="txt"
              value={username}
              onChange={ev => setUsername(ev.target.value)}
              placeholder="Enter Username"
            />
            {!isLogin && (
              <input
                required
                type="txt"
                value={fullname}
                onChange={ev => setFullname(ev.target.value)}
                placeholder="Enter Full Name"
              />
            )}
            <input
              required
              type="password"
              value={password}
              onChange={ev => setPassword(ev.target.value)}
              placeholder="Enter Password"
              autoComplete="off"
            />
            <button type="submit" className={`login-signup-submit-btn ${isLogin ? 'login' : 'signup'}`}>
              {isLogin ? 'Log in' : 'Sign up'}
            </button>
          </form>
          <section className="other-login-options">
            <span>OR</span>
            <button>
              <img src={googleIcon} className="button-icon-image" />
              Continue with Google
            </button>
            <button
              onClick={() => {
                onClickGuest();
              }}>
              <img src={femaleGuest} className="button-icon-image guest" />
              Continue as Guest
            </button>
          </section>
          <hr className="seperate-switch-link-hr" />
          <div className="lower-nav-links-container">
            <Link to={'/'} className="switch-link">
              Back Home
            </Link>
            <Link to={isLogin ? '/signup' : '/login'} className="switch-link">
              {isLogin ? 'Sign up for an account' : 'Log In'}
            </Link>
          </div>
        </div>
      </div>
      <img src={leftHero} className="left-hero" />
      <img src={rightHero} className="right-hero" />
    </div>
  );
}
