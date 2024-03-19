import React from 'react'
import './Header.css'
import logo from '../image/logo.svg'
import family from '../image/Family.svg'

function Header() {
  return (
    <div>
        <header className='bg-[#74C69D]'>
          <div className="container">
            <nav className="nav flex justify-between">
              <div className="nav__part">
                <img src={logo} alt="" />
                <h2>Start</h2>
              </div>
              <ul className="nav__list">
                <li className="nav__item">
                  <a>Home</a>
                </li>
                <li className="nav__item">
                  <a>Portfolio</a>
                </li>
                <li className="nav__item">
                  <a>Services</a>
                </li>
                <li className="nav__item">
                  <a>Contacts</a>
                </li>
              </ul>
            </nav>
            <div className="family">
              <div className="family__1">
                <p>WELCOME</p>
                <h1 className='title'>Lorem ipsum dolor sit amet consectetur.</h1>
                <p className='text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur harum necessitatibus atque error neque modi assumenda culpa corrupti perspiciatis ducimus.</p>
                <button>Explore</button>
              </div>
              <div className="family__2">
                <img src={family} alt="" />
              </div>
            </div>
          </div>
        </header>
    </div>
  )
}

export default Header