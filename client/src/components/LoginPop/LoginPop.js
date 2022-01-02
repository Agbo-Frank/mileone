import React, { useState, useRef, useReducer } from "react";
import './login.css'
import { useLazyQuery, useMutation } from '@apollo/client'
import { LOGINUSER }from '../../Apollo/operations/Queries'
import { SIGNUPUSER }from '../../Apollo/operations/Mutations'
import {Auth, AuthVar} from '../../Apollo/reactiveVar/Auth'

function LoginPop({toggle}){

    const [active, setActive] = useState('login')

    const email = useRef('');
    const password = useRef('');

    const [login] = useLazyQuery(LOGINUSER, {
        fetchPolicy: "network-only",
        onCompleted: (data)=> {
            if(data){
                Auth({
                    type: 'LOGIN_USER',
                    data
                })
                console.log(AuthVar())
                toggle[1](false)
            }
        },
        onError: (err) => {
            console.log(err)
        }
    })

    const [signUp, {loading: register}] = useMutation(SIGNUPUSER, {
        fetchPolicy: "network-only",
        onCompleted: (data)=> {
            if(data){
                Auth({
                    type: 'CREATE_USER',
                    data
                })
                toggle[1](false)
            }
        },
        onError: (err) => {
            console.log(err)
        }
    })

    function submitSignUpForm(e){
        e.preventDefault()
        signUp({
            variables: {
                email: email.current.value,
                password: password.current.value
            }
        })
    }

    function submitLoginForm(e){
        e.preventDefault()
        login({
            variables: {
                email: email.current.value,
                password: password.current.value
            }
        })
    }
    
    return(
        <div className={toggle[0] ? "loginPopUp active" : "loginPopUp"}>
            <div>
                <div>
                    <div className="switch">
                        <p className={ active === 'login'? "active" : ""} onClick={() => setActive('login')}>Login</p>
                        <p className={ active === 'register'? "active" : ""} onClick={() => setActive('register')}>Sign Up</p>
                    </div>
                    <i class="fa fa-times" onClick={() => toggle[1](false)}></i>
                </div>
                <h1>{active === 'login'? "Login" : "Sign Up"}</h1>
                <form onSubmit={(e) => {
                    switch (active){
                        case 'login': {
                            submitLoginForm(e)
                        }
                        case 'register': {
                            submitSignUpForm(e)
                        }
                    }
                }}>
                    <div>
                        <input 
                        type="email"  
                        placeholder="Email"
                        ref={email}/>
                    </div>
                    <div className="password">
                        <input 
                        type="password"  
                        placeholder="Password"
                        ref={password}/>
                        { active === 'login' && <small>Forgot Password</small> }
                    </div>
                    

                    <div className="buttons">
                        <button type="submit">{active === 'login'? "Login" : "Sign Up"}</button>
                        <button type="button">
                            <div className="">
                            {active === 'login'? "Login" : "Sign Up"} with Google
                            </div>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginPop

