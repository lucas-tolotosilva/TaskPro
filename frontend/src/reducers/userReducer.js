import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_FAIL,
    USER_LOGOUT,
    USER_LOGIN_SUCCESS,
} from '../constants/userConstants'

const userInfoFromStorage = localStorage.getItem('userInfo') ?
    JSON.parse(localStorage.getItem('userInfo')) : null


export const userLoginReducer = (state = { userInfo: userInfoFromStorage }, action) => {
    switch (action.type) {
        case USER_LOGIN_REQUEST:
            return { loading: true }

        case USER_LOGIN_SUCCESS:
            return { loading: false, userInfo: action.payload }

        case USER_LOGIN_FAIL:
            return { loading: false, error: action.payload }

        case USER_LOGOUT:
            return {}

        default:
            return state

    }
}