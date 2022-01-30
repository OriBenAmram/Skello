import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GoogleLogin } from 'react-google-login';
import googleIcon from '../../assets/imgs/google-icon.svg';

export function LoginWithGoogle({ onLoginGoogle, }) {
    const handleFailure = (res) => {
        console.log('couldnt login')
    }

    const handleLogin = (googleData) => {
        onLoginGoogle(googleData)
    }
    return (
        <div>
            <GoogleLogin
                clientId={"349715903171-rm59q64faelu1sivune89lktj8kf78s0.apps.googleusercontent.com"}
                render={renderProps => (
                    <button onClick={renderProps.onClick} disabled={renderProps.disabled}>
                        <div className='button-content'>
                            <img src={googleIcon} className="button-icon-image" />
                            <p>Continue with Google</p>
                        </div>
                    </button>
                )}
                buttonText="Log in with Google $$"
                onSuccess={handleLogin}
                onFailure={handleFailure}
                cookiePolicy={'single_host_origin'}
            >
            </GoogleLogin>
        </div>
    )
}