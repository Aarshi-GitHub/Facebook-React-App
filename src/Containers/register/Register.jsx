import React from 'react'
import "./Register.css"
import {MdDriveFolderUpload} from "react-icons/md";
import {Link} from "react-router-dom"
import { useState } from 'react';

const Register = () => {
    const [fileState,setFileState] = useState(null);

  return (
    <div className='register'>
        <div className='registerCont row'>
            <div className='registerLeft col-sm-6'>
                <h3 className='registerLogo'>facebook</h3>
                <span className='registerDesc'>Facebook helps you Connect and share with the people in your life</span>
            </div>
            <div className='registerRight col-sm-6'>
                <div className='registerBox'>
                    <div className='registerTop'>
                        {fileState && <img src={URL.createObjectURL(fileState)} alt="" className="profileImg"/>}
                        <div className='registerformInput'>
                            <label htmlFor='file'>Image : <MdDriveFolderUpload className='icon'/></label>
                            <input style={{display:"none"}} onChange={(e)=>setFileState(e.target.files[0])} type="file" id="file" accept=".png,.jpeg,.jpg"/>
                        </div>
                    </div>
                    <div className='Registerbottom'>
                        <form className='RegisterBottomBox'>
                            <input type="text" id="username" placeholder="Username" className='registerInput' required/>
                            <input type="email" id="email" placeholder="Em@il" className='registerInput' required/>
                            <input type="password" id="password" placeholder="Password" className='registerInput' required/>
                            <input type="password" id="confirmPassword" placeholder="Confirm Password" className='registerInput' required/>
                            <Link to="/home">
                            <button type='submit' className='registerButton'>Create New Account</button>
                            </Link>
                            <Link to="/login">
                                <button className='loginRegisterButton'>Log into Account</button>
                            </Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Register