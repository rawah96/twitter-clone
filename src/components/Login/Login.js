import React from 'react'
import './Login.css'
import Logo from './twitter.jpg'
import {Link} from 'react-router-dom'

function Login() {
    return (
        <div className="login">
            {/* center container */}
            {/* logo */}
            <img className="twitter-logo" src={Logo} alt="" />
            <h2>Log in to Twitter</h2>
            <form>
                <input type="text" placeholder="email" className="email" />
                <br />
                <input type="text" placeholder="Password" className="password" />
                <br />
                <button className="login-btn">Log in</button>
            </form>
            <br />
            {/* Link to sign up */}
            <Link to="/register">
                <h4>Sign up for Twitter</h4>
            </Link>
        </div>
    )
}

export default Login
