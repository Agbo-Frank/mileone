import React, { useState } from "react";
import { AuthAlert } from '../Alert/Alert'
import { ToggleVar,ToggleFunc} from '../../Apollo/reactiveVar/Toggle';
import { useReactiveVar } from '@apollo/client'
import Form from '../Form/Form'
import './login.css'

function LoginPop(){

    const [active, setActive] = useState('login')
    const Toggle = useReactiveVar(ToggleVar)

    return(
        <div className={Toggle[0]?.loginPop ? "loginPopUp active" : "loginPopUp"}>
            <div>
                <div>
                    <div className="switch">
                        <p className={ active === 'login'? "active" : ""} onClick={() => setActive('login')}>Login</p>
                        <p className={ active === 'register'? "active" : ""} onClick={() => setActive('register')}>Sign Up</p>
                    </div>
                    <i class="fa fa-times" onClick={() => ToggleFunc({type: 'CLOSE_LOGIN_MODEL'})}></i>
                </div>
                <AuthAlert />
                <Form active={active} setActive={setActive}/>
            </div>
        </div>
    )
}

export default LoginPop

