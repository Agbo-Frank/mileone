import React, { useState } from "react";
import { AuthAlert } from '../../Alert/Alert'
import Form from '../../Form/Form'
import './Login.css'

const Login = () => {
    const [active, setActive] = useState('login')
    return (
        <>
            <section className="auth">
                <div className="mileone-container">
                    <div className="matrix-2"></div>
                    <div className="matrix-1"></div>
                    <div className="matrix-4"></div>
                    <div className="matrix-3"></div>

                    <div className="auth_container">
                        <div className="switch">
                            <p className={ active === 'login'? "active" : ""} onClick={() => setActive('login')}>Login</p>
                            <p className={ active === 'register'? "active" : ""} onClick={() => setActive('register')}>Sign Up</p>
                        </div>
                        <AuthAlert />
                        <div className="largeScreens">
                            <div>
                                <Form active={active} setActive={setActive}/>
                            </div>
                            <div>
                                <Form active="register" />
                            </div>
                        </div>
                        <div className="smallScreens">
                            <div>
                                <Form active={active} setActive={setActive} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Login;