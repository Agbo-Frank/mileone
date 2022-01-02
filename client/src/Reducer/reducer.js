import { useReducer } from 'react'

const init = {
    loginInModel: false,
    alert: {
        message: '',
        type: false,
        show: false,
    }
}

function reducer(state, action){
    switch(action.type){
        case 'OPEN_LOGIN_MODEL':{
            return {
                ...state,
                loginInModel: true,
            }
        }
        case 'CLOSE_LOGIN_MODEL':{
            return {
                ...state,
                loginInModel: false,
            }
        }
        case 'TRIGGER_ALERT': {
            return{
                ...state,
                message: action.payload,
                type: true,
                show: true,
            }
        }
        case 'TRIGGER_ERROR_ALERT': {
            return{
                ...state,
                message: action.payload,
                type: false,
                show: true,
            }
        }
    }
}

// const [state, dispatch] = useReducer(reducer, init)

export {
    init,
    reducer
}