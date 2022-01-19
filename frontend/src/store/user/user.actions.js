import {userService} from '../../services/user.service.js'


export function login(credentials) {
    return async (dispatch) => {
        try {
            const user = await userService.login(credentials)
            dispatch({
                type: 'SET_USER',
                user
            })
        } catch (err) {
            // showErrorMsg('Cannot login')
            console.log('Cannot login', err)
        }
    }
}


export function signup(credentials) {
    console.log("🚀 ~ file: user.actions.js ~ line 21 ~ signup ~ credentials", credentials)
    return async (dispatch) => {
        try {
            const user = await userService.signup(credentials)
            dispatch({
                type: 'SET_USER',
                user
            })

        } catch (err) {
            console.log('error when signing up', err)
        }

    }
}