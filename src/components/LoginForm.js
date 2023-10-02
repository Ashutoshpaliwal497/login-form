import React, { useState } from 'react'
import './LoginForm.css'
import { useNavigate } from 'react-router-dom';
import FormData from './SavedData.json'
import { NavLink } from 'react-router-dom'

const LoginForm = () => {

    const [Password, setPassword] = useState('')
    const [Username, setUsername] = useState('')

    const Signbody = useNavigate();

    const HandleSubmit = (e) => {
        e.preventDefault();
        const newEntry = { Username, Password }

        const user = FormData.find(
            (user) => user.name === Username && user.password === Password
        )
        if (user) {
            console.log(newEntry);
            Signbody("/Body")
        }
        else {
            setTimeout(() => {
                alert("Enter Correct Username or Password");
            }, 100)
            let arr = document.querySelector(".form-container");
            arr.style.border = "1px solid red";
        }
    }

    return (
        <>
            <div className='Form-m-div'>
                <div className="form-container">
                    <p className="title">Login</p>
                    <form className="form" onSubmit={HandleSubmit}>
                        <div className="input-group">
                            <label>Name</label>
                            <input onChange={(e) => setUsername(e.target.value)} value={Username} type="text" placeholder="Name" />
                        </div>
                        <div className="input-group">
                            <label>Password</label>
                            <input onChange={(e) => setPassword(e.target.value)} value={Password} type="password" placeholder="Password" />
                        </div>
                        <button className="sign">Log in</button>
                    </form>
                    <NavLink to="/SignupForm"><a className="title-2" href='#'>Signup</a></NavLink>
                </div>
            </div>
        </>
    )
}

export default LoginForm