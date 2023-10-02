import React from 'react'
import './Header.css'
import { NavLink } from 'react-router-dom'
const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <img className='l-img' src='https://banner2.cleanpng.com/20180329/zue/kisspng-computer-icons-user-profile-person-5abd85306ff7f7.0592226715223698404586.jpg' />

          <a className="navbar-brand l-cont" href="#">Ashutosh Paliwal</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"><i class="fa-solid fa-bars"></i></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
             
                         </ul>
            <span className="navbar-text r-cont">
              <h3>Create a new Account -- <NavLink to="/SignupForm"><a href='#'>Click Here</a></NavLink></h3>
            </span>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header