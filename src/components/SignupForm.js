import React, { useState } from 'react'
import './SignupForm.css'
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom'

const SignupForm = () => {
    const [text, setText] = useState(null);
    const [pass, setPass] = useState(null);

    const HandleTextInput = (e) => {
        setText(e.target.value);
    }

    const HandlePassInput = (e) => {
        setPass(e.target.value);
    }

    const Signbody = useNavigate();

    const HandleSubmit = (e) => {
        e.preventDefault();
        if (text && pass) {
            Signbody("/BodyTwo")
        }
        else {
            setTimeout(() => {
                alert("Enter your username & password");
            }, 100)
            let arr = document.querySelector(".form-container");
            arr.style.border = "1px solid red";
        }
    }

    return (
        <>
            <div className='Form-m-div'>
                <div className="form-container">
                    <p className="title">Signup</p>
                    <form className="form" onSubmit={HandleSubmit}>
                        <div className="input-group">
                            <label>Name</label>
                            <input onChange={HandleTextInput} type="text" placeholder="Name" />
                        </div>
                        <div className="input-group">
                            <label>Password</label>
                            <input onChange={HandlePassInput} type="password" placeholder="Password" />
                        </div>
                        <button className="sign">Sign in</button>
                        <NavLink to="/LoginForm"><a className="title-2" href='#'>Login</a></NavLink>
                    </form>
                </div>
            </div>
        </>
    )
}

export default SignupForm