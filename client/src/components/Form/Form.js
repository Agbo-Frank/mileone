import { useLazyQuery, useMutation } from '@apollo/client'
import React, { useRef } from "react";
import { useLocation, useNavigate } from 'react-router-dom'
import { AlertFunc } from '../../Apollo/reactiveVar/AuthAlertVar'
import { ToggleFunc} from '../../Apollo/reactiveVar/Toggle'
import { LOGINUSER }from '../../Apollo/operations/Queries'
import { SIGNUPUSER, GOOGLELOGIN, FORGETPASSWORD }from '../../Apollo/operations/Mutations'
import {Auth, AuthVar} from '../../Apollo/reactiveVar/Auth'
import GoogleLogin from 'react-google-login';
import '../LoginPop/login.css'
require("dotenv").config()

function Form({ active, setActive }){
    const location = useLocation()
    const navigate = useNavigate()
    const email = useRef('');
    const password = useRef('');

    async function errorHandling(err){
        if(err){
            console.log(err.graphQLErrors)
            const message = err.graphQLErrors[0]?.message
            await setTimeout(() => AlertFunc({type: 'CLOSE_AUTH_ALERT'}), 5000)
            return AlertFunc({type: 'ERROR_AUTH_ALERT', data: message})
        }
    }

    const config = {
        fetchPolicy: "network-only",
        onCompleted: (data)=> {
            if(data.loginUser){
                console.log(data)
                Auth({
                    type: 'LOGIN_USER',
                    data
                })
            }
            else if(data.googleLogin){
                console.log(data)
                Auth({
                    type: 'GL',
                    data
                })
            }
            else if(data.createUser){
                console.log(data)
                Auth({
                    type: 'CREATE_USER',
                    data
                })
            }
            if(location?.pathname !== '/login') {
                console.log(location.pathname)
                ToggleFunc({type: 'CLOSE_LOGIN_MODEL'})
                return navigate(`${location.pathname}`)
            }
            return navigate('/')
        },
        onError: (err) => errorHandling(err)
    }

    const [login] = useLazyQuery(LOGINUSER, {...config})
    const [signUp] = useMutation(SIGNUPUSER, {...config})
    const [GL] = useMutation(GOOGLELOGIN, {...config})

    const [fPW] = useMutation(FORGETPASSWORD, {
        fetchPolicy: "network-only",
        onCompleted: async (data) => {
            await setTimeout(() => {
                setActive('login')
                AlertFunc({type: 'CLOSE_AUTH_ALERT'})
            }, 5000)
            AlertFunc({
                type: 'SUCCESS_AUTH_ALERT', 
                data: `${data.forgetPassword.message}`
            })
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
    function forgetPassWord(e){
        e.preventDefault()
        fPW({
            variables: {
                email: email.current.value
            }
        })
    }
    function googleLogin(data, active){
        GL({
            variables: {
                tokenId: data.tokenId,
                actionType: active
            }
        })
    }

    return(
        <>
            <h1>{
                active === 'login'? "Login" :
                active === 'forgetPassWord'? 
                "Forget PassWord":"Sign Up"
            }</h1>
            <form onSubmit={(e) => {
                switch (active){
                    case 'login': {
                        submitLoginForm(e)
                    }
                    break;
                    case 'register': {
                        submitSignUpForm(e)
                    }
                    break;
                    case 'forgetPassWord': {
                        forgetPassWord(e)
                    }
                    break;
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
                    { 
                        active === 'login' && <small 
                        onClick={async () => {
                            await setTimeout(() => AlertFunc({type: 'CLOSE_AUTH_ALERT'}), 5000)
                            AlertFunc({type: 'ERROR_AUTH_ALERT', data: "please Provide your email and click on the send new password"})
                            setActive('forgetPassWord')
                        }}>Forgot Password</small> 
                    }
                </div>
                

                <div className="buttons">
                    <button type="submit">
                        {/* {loading || registering && <i className="fa fa-spinner fa-spin" aria-hidden="true"></i>} */}
                        {   active === 'login'? 
                            "Login" : 
                            active === 'forgetPassWord'? 
                            "Get A new Password":"Sign Up"
                        }
                    </button>
                    <GoogleLogin
                        clientId = {process.env.CLIENT_ID}
                        render={renderProps => (
                            <button 
                            type="button"
                            onClick={renderProps.onClick}
                            disabled={renderProps.disabled}
                            >
                                <div>
                                {active === 'login'? "Login" : "Sign Up"} with Google
                                </div>
                            </button>
                        )}
                        onSuccess={(data) => googleLogin(data, active)}
                        onFailure={err => {
                            console.log(err)
                        }}
                    />
                </div>
            </form>
        </>
    )
}

export default Form

 