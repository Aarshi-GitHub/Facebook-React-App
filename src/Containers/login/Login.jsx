import React from 'react'
import "./Login.css"
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='login'>
        <div className='loginCont row'>
            <div className='loginLeft col-sm-6'>
                <h3 className='loginLogo'>
                    facebook
                </h3>
                <span className='loginDesc'>
                    Facebook helps you Connect and share with the people in your life
                </span>
            </div>
            <div className='loginRight col-sm-6'>
                <div className='loginBox'>
                    <div className='loginbottom'>
                        <form className='loginbottomBox'>
                            <input type="email" id="email" placeholder="Em@il" className='loginInput' required/>
                            <input type="password" id="password" placeholder="Password" className='loginInput' required/>
                            <Link to="/home">
                            <button type='submit' className='signinButton'>Sign In</button>
                            </Link>
                            <Link to="/">
                            <button className='createButton'>Create a New Account</button>
                            </Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login