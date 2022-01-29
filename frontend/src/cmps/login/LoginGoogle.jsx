import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GoogleLogin } from 'react-google-login';
import googleIcon from '../../assets/imgs/google-icon.svg';

// Services
import { userService } from '../../services/user.service.js'

export function LoginWithGoogle({ onLoginGoogle, }) {
    // const REACT_APP_GOOGLE_CLIENT_ID = '349715903171-rm59q64faelu1sivune89lktj8kf78s0.apps.googleusercontent.com'
    // const [loginData, setLoginData] = useState(userService.getLoggedinUser() || null)
    const handleFailure = (res) => {
        alert('couldnt login', res)
    }

    const handleLogin = (googleData) => {
        onLoginGoogle(googleData)
    }
    return (
        <div>
            <GoogleLogin
                clientId={"349715903171-rm59q64faelu1sivune89lktj8kf78s0.apps.googleusercontent.com"}
                // clientId={REACT_APP_GOOGLE_CLIENT_ID}
                render={renderProps => (
                    <button onClick={renderProps.onClick} disabled={renderProps.disabled}>
                        <img src={googleIcon} className="button-icon-image" />
                        Continue with Google
                    </button>
                )}
                buttonText="Log in with Google $$"
                onSuccess={handleLogin}
                // onSuccess={responseGoogle}
                onFailure={handleFailure}
                // onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
            // isSignedIn={true}
            >
            </GoogleLogin>
        </div>
    )
}