import { useReducer } from 'react'
import axiosClient from '../../config/axiosClient'
import {
    USER_LOGOUT,
    LOGIN_ERROR,
    LOGIN_SUCCESS
} from '../../types'
import authContext from './authContext'
import authReducer from './authReducer'


const AuthState = ({children}) => {

    const initialState = {
        token:localStorage.getItem('reactToken'),
        authenticated: null,
        msg: null
    }

    const [state, dispatch] = useReducer(authReducer, initialState)

    const userLogin = async data => {
        try {
            const response = await axiosClient.post('',data)
            dispatch({
                type: LOGIN_SUCCESS,
                payload: response.data
            })
        } catch (error) {
            console.log(error)
            dispatch({
                type: LOGIN_ERROR,
                payload: error.response.data.error
            })
        }
    }

    const userLogout = () => {
        dispatch({
            type: USER_LOGOUT
        })
    }

    return (
        <authContext.Provider
            value={{
                token:state.token,
                authenticated: state.authenticated,
                msg: state.msg,
                userLogin,
                userLogout
            }}
        >{children}</authContext.Provider>
    )
}

export default AuthState;