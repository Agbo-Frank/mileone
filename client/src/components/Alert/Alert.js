import { useEffect, useReducer } from 'react'
import './alert.css'
import { init, reducer } from '../../Reducer/reducer';

function Alert(){
    const [state, dispatch] = useReducer(reducer, init)
    // function set(){
    //     if(alert.show){
    //         setTimeout(setAlert({
    //             message: '',
    //             type: false,
    //             show: false
    //         }), 5000)
    //     }
    // }
    
    // useEffect(() => {
    //     set()
    // }, [alert])
    return(
        <div className={ state.alert.type ? `alert ${state.alert.show && `active`} alert-success` : `alert ${state.alert.show && `active`} alert-danger`} role="alert">
            {state.alert.message}
        </div>
    )
}

export default Alert

// {alert, setAlert}