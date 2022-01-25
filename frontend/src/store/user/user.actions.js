import { userService } from '../../services/user.service.js'

export function login(credentials) {
    return async (dispatch) => {
        try {
            const user = await userService.login(credentials)
            dispatch({
                type: 'SET_USER',
                user
            })
        } catch (err) {
            console.log('Cannot login', err)
        }
    }
}

export function signup(credentials) {
    return async (dispatch) => {
        try {
            const user = await userService.signup(credentials)
            dispatch({
                type: 'SET_USER',
                user
            })

        } catch (err) {
            console.log('Error with signing up', err)
        }

    }
}
export function logout() {
    return async (dispatch) => {
        try { 
            await userService.logout()
            dispatch({
                type: 'SET_USER',
                user: null
            })
            console.log('Logged out')
        } catch (err) { 
            console.log('Cannot logout')
        }
    }
}