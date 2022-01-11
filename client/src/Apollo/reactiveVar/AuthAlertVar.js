import { makeVar } from '@apollo/client'

const AuthAlertVar = makeVar([])
const AlertVar = makeVar([])

function AlertFunc(action){
    switch(action.type){
        case 'CLOSE_AUTH_ALERT':{
            return AuthAlertVar([{
                ...AuthAlertVar()[0],
                message: "",
                type: false,
                show: false
            }])
        }
        break;
        case 'ERROR_AUTH_ALERT': {
            return AuthAlertVar([{
                ...AuthAlertVar()[0],
                message: action.data,
                type: false,
                show: true
            }])
        }
        break;
        case 'SUCCESS_AUTH_ALERT': {
            return AuthAlertVar([{
                ...AuthAlertVar()[0],
                message: action.data,
                type: true,
                show: true
            }])
        }
        break;
        case 'CLOSE_ALERT':{
            return AlertVar([{
                ...AlertVar()[0],
                message: "",
                type: false,
                show: false
            }])
        }
        break;
        case 'ERROR_ALERT': {
            return AlertVar([{
                ...AlertVar()[0],
                message: action.data,
                type: false,
                show: true
            }])
        }
        break;
        case 'SUCCESS_ALERT': {
            return AlertVar([{
                ...AlertVar()[0],
                message: action.data,
                type: true,
                show: true
            }])
        }
        break;
    }
}

export {
    AlertFunc,
    AuthAlertVar,
    AlertVar
}