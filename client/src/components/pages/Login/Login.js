import React, { useRef } from "react";
import LoginPop from '../../LoginPop/LoginPop'
import { useLazyQuery, useMutation } from '@apollo/client'
import { LOGINUSER }from '../../../Apollo/operations/Queries'
import { SIGNUPUSER }from '../../../Apollo/operations/Mutations'
import {Auth} from '../../../Apollo/reactiveVar/Auth'
import images from "../../../assets/images/images";
import { Header } from "../../index";
import './Login.css'

const Login = () => {
    const email = useRef('');
    const password = useRef('');
    const email1 = useRef('');
    const password1 = useRef('');

    const [login] = useLazyQuery(LOGINUSER, {
        fetchPolicy: "network-only",
        onCompleted: (data)=> {
           return Auth({
                type: 'LOGIN_USER',
                data
            })
        },
    })

    const [signUp, {loading: register}] = useMutation(SIGNUPUSER, {
        fetchPolicy: "network-only",
        onCompleted: (data)=> {
            return Auth({
                    type: 'CREATE_USER',
                    data
                })
        }
    })

    function submitSignUpForm(e){
        e.preventDefault()
        signUp({
            variables: {
                email: email1.current.value,
                password: password1.current.value
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

    return (
        <>
            <Header />
            <section className="auth">
                <div className="mileone-container">
                    <div className="matrix-2"></div>
                    <div className="matrix-1"></div>
                    <div className="matrix-4"></div>
                    <div className="matrix-3"></div>

                    <div className="auth_container">
                            <div>
                                <h1>Login</h1>
                                <form onSubmit={(e) => submitLoginForm(e)}>
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
                                        <small>Forgot Password</small>
                                    </div>

                                    <div className="buttons">
                                        <button type="submit">Login</button>
                                        <button>
                                            <div>
                                                <img src={images.Google} alt="img"/> 
                                                Login with Google
                                            </div>
                                        </button>
                                    </div>
                                </form>
                            </div>


                        <div>
                            <h1>Register</h1>
                            <form onSubmit={(e) => submitSignUpForm(e)}>
                                <div>
                                    <input 
                                    type="email" 
                                    placeholder="Email"
                                    ref = {email1}/>
                                </div>
                                <div className="password">
                                        <input 
                                        type="password"  
                                        placeholder="Password"
                                        ref={password1}/>
                                </div>

                                <div className="buttons">
                                    <button type="submit">{register ? 'Loading...': 'Register'}</button>
                                    <button type="button">
                                        <div className="flex wrap">
                                            <img src={images.Google} alt="img"/> 
                                            Register with Google
                                        </div>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Login;