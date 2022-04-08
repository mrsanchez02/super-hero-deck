import {
    USER_LOGOUT,
    LOGIN_ERROR,
    LOGIN_SUCCESS
} from '../../types'

const authReducer = (state,action) =>{
    switch (action.type) {
        case LOGIN_SUCCESS:
            localStorage.setItem('reactToken',action.payload.token);
            return {
                ...state,
                authenticated:true,
                msg:'Login Success'
            }
        case LOGIN_ERROR:
        case USER_LOGOUT:
            localStorage.removeItem('reactToken');
            return {
                ...state,
                token:null,
                authenticated:null,
                msg: action.payload
            }
        default:
            return state;
    }
}

export default authReducer;