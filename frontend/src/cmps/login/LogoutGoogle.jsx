import { GoogleLogout } from 'react-google-login';
import { useGoogleLogin } from 'react-google-login'
import googleIcon from '../../assets/imgs/google-icon.svg';



export function LogoutWithGoogle() {
    const REACT_APP_GOOGLE_CLIENT_ID = 'http://349715903171-rm59q64faelu1sivune89lktj8kf78s0.apps.googleusercontent.com'
    const handleFailure = (res) => {
        alert('Couldnt logout...', res)
    }

    const handleLogout = () => {
    }

    return (
        <div>
            <GoogleLogout
                clientId={REACT_APP_GOOGLE_CLIENT_ID}
                render={renderProps => (
                    <button onClick={renderProps.onClick} disabled={renderProps.disabled}>
                        <img src={googleIcon} className="button-icon-image" />
                        Log out from Google
                        </button>
                )}
                buttonText="Logout"
                onLogoutSuccess={handleLogout}
                // onSuccess={responseGoogle}
                onFailure={handleFailure}
                // onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
                // isSignedIn={true}
            >
            </GoogleLogout>
        </div>
    )
}