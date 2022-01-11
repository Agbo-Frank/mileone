import { useReactiveVar } from '@apollo/client'
import { AuthAlertVar, AlertVar } from '../../Apollo/reactiveVar/AuthAlertVar'
import './alert.css'

function Alert(){
    const alert = useReactiveVar(AlertVar)
    return(
        <div className={ alert[0]?.type ? `alert normal ${alert[0]?.show && `active`} alert-success` : `alert normal ${alert[0]?.show && `active`} alert-danger`} role="alert">
            {alert[0]?.message}
        </div>
    )
}
function AuthAlert(){
    const alert = useReactiveVar(AuthAlertVar)
    return(
        <>
            <div className={ alert[0]?.type ? `alert auth1 ${alert[0]?.show && `active`} alert-success` : `alert auth1 ${alert[0]?.show && `active`} alert-danger`} role="alert">
                <div>{alert[0]?.message}</div>
            </div>
        </>
    )
}

export {
    Alert,
    AuthAlert
}
