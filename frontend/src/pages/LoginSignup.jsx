import { useState } from "react";
import { connect } from 'react-redux'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { ImTrello } from "react-icons/im";

import { userService } from "../services/user.service.js";
import { login, signup } from '../store/user/user.actions'



export function LoginSignup( props ) {
    const dispatch = useDispatch()

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [fullname, setFullname] = useState("");
    // const [isLogin, setIsLogin] = useState(true);
    const isLogin = props.location.pathname.includes("login");



    const handleSubmit = async (evt) => {
        evt.preventDefault();
        if(username.trim() && password.trim()){
            if(!isLogin){
               await dispatch(signup({username, password, fullname, imgUrl: "" }))
                props.history.push("/workspace");
            }else{
               await dispatch(login({username, password}))
                props.history.push("/workspace");
            }
        }
    }

// Use dispatch actions
// import {saveCar} from ....
// const dispatch = useDispatch()
// dispatch (saveCar(car))

// our store
// const cars =  useSelector (state=> state.cars)

    return (
        <div className="login-signup">
            <div className='login flex'>
                <ImTrello />
                <h1>Skello</h1>
            </div>
            <div className="login-signup-container flex column">
                <h3>
                    {isLogin ? "Login in to Skello" : "Sign up"}
                </h3>
                <form className="flex column" onSubmit={handleSubmit}>
                    <input 
                    type="text"
                    value={username}
                    onChange={(evt)=>setUsername(evt.target.value)}
                    placeholder="Enter Username"
                     />
                     {!isLogin && (
                        <input
                        type="txt"
                        value={fullname}
                        onChange={(ev) => setFullname(ev.target.value)}
                        placeholder="Enter Full Name"
                        />
                     )}
                     <input
                    type="password"
                    value={password}
                    onChange={(ev) => setPassword(ev.target.value)}
                    placeholder="Enter Password"
                    autoComplete="off"
                    />
                    <button type="submit" className="login-signup-submit">
                        {isLogin ? "Log in" : "Sign up"}
                    </button>
                </form>

                <Link to={isLogin ? '/signup' : '/login'}>
                    {isLogin ? "Sign up for an account" : "Already have an account? Log In"}
                </Link>

            </div>
            {/* <section className='login-signup-modal'>
                    <h2>
                        {!isSignup ? 'Login Here' : 'Sign-up Here'}
                    </h2>
                    <div className='modal-info-container'>
                        <div className='info'>
                            <p>Don't have an account yet? <br /> Just Sign-up with the button on the bottom right.</p>
                        </div>
                            {!isSignup && <form className="login-form" onSubmit={this.onLogin}>
                                <input
                                    type="text"
                                    name="username"
                                    value={username}
                                    placeholder="Username"
                                    onChange={this.handleChange}
                                    required
                                    autoFocus
                                />
                                <input
                                    type="password"
                                    name="password"
                                    value={password}
                                    placeholder="Password"
                                    onChange={this.handleChange}
                                    required
                                />
                                <button className='third-btn'>Login!</button>
                            </form>}
                            {isSignup && <form className="signup-form" onSubmit={this.onSignup}>
                                <input
                                    type="text"
                                    name="fullname"
                                    value={fullname}
                                    placeholder="Fullname"
                                    onChange={this.handleChange}
                                    required
                                />
                                <input
                                    type="text"
                                    name="username"
                                    value={username}
                                    placeholder="Username"
                                    onChange={this.handleChange}
                                    required
                                />
                                <input
                                    type="password"
                                    name="password"
                                    value={password}
                                    placeholder="Password"
                                    onChange={this.handleChange}
                                    required
                                />
                                <button className='third-btn'>Signup!</button>
                            </form>}
                    </div>
                    <a className='toggle-form-link' href="#" onClick={this.toggleSignup}>{!isSignup ? 'Signup' : 'Login'}</a>
                </section > */}
        </div >
    )

}
