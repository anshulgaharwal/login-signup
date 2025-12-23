import React from 'react'
import './LoginSignup.css'

import user_icon from '../Assets/person.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'
import google_icon from '../Assets/google.png'

const LoginSignup = () => {
    return(
        <div>
            <div className="container">
                <div className="header">
                    <div className="text">Auth Page</div>
                    <div className="underLine"></div>
                </div>
                <div className="inputs">
                    <div className="input">
                        <img src={user_icon} alt="" />
                        <input type="text" placeholder='Name'/>
                    </div>
                    <div className="input">
                        <img src={email_icon} alt="" />
                        <input type="email" placeholder='Email Id'/>
                    </div>
                    <div className="input">
                        <img src={password_icon} alt="" />
                        <input type="password" placeholder='Password'/>
                    </div>
                </div>
                <div className="forgot">Forgot password <span>click here</span></div>
                <div className="submit-container">
                    <div className="submit">Sign Up</div>
                    <div className="submit">Sign In</div>
                </div>
                <div className="google">
                    <div className="text-google">Sing In with Google</div>
                    <img src= {google_icon} alt="" />
                </div>
            </div>
        </div>
    );
}

export default LoginSignup