import React, { useState } from 'react'
import './LoginSignup.css'

import user_icon from '../Assets/person.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'
import google_icon from '../Assets/google.png'

const LoginSignup = () => {

    const [action, setAction] = useState("Sign Up")

    return(
        <div>
            <div className="container">
                <div className="header">
                    <div className="text">{action}</div>
                    <div className="underLine"></div>
                </div>
                <div className="inputs">
                    {action === "Sign In" ? <></> : <div className="input">
                        <img src={user_icon} alt="" />
                        <input type="text" placeholder='Name'/>
                    </div>}
                    <div className="input">
                        <img src={email_icon} alt="" />
                        <input type="email" placeholder='Email Id'/>
                    </div>
                    <div className="input">
                        <img src={password_icon} alt="" />
                        <input type="password" placeholder='Password'/>
                    </div>
                </div>
                {action === "Sign Up" ? <></> : <div className="forgot">Forgot password <span>click here</span></div>}
                <div className="submit-container">
                    <div className={action === "Sign In" ? "submit gray" : "submit"} onClick = {()=>{setAction("Sign Up")}}>Sign Up</div>
                    <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick = {()=>{setAction("Sign In")}}>Sign In</div>
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