import React from 'react'
import './Footer.css'
import employee1 from '../image/employee1.svg' 
import employee2 from '../image/employee2.svg' 
import employee3 from '../image/employee3.svg' 
import employee4 from '../image/employee4.svg' 
import logos1 from '../image/logos1.svg'

function Footer() {
  return (
    <div>
        <footer>
          <div className="container team">
          <div className="groups">
              <div className="group">
              <p className='text'>T E A M</p>
              <h1 className='h1'>Our Talents</h1>
              <p className='p'>Lorem ipsum, dolor sit amet consectetur Suscipit nemo hic quos, ab,</p>
              </div>
            </div>
            <ul className="list">
              <li className="list__items">
              <div className="div">
              <img src={employee1} alt="" />
                <h1>Peg Legge</h1>
                <p>CEO</p>
              </div>
              </li>
              <li className="list__items">
                <div className="div">
                <img src={employee2} alt="" />
                <h1>Richard Guerra</h1>
                <p>CTO</p>
                </div>
              </li>
              <li className="list__items">
                <div className="div">
                <img src={employee3} alt="" />
                <h1>Alexandra Stolz</h1>
                <p>DESIGNER</p> 
                </div>
              </li>
              <li className="list__items">
                <div className="div">
                <img src={employee4} alt="" />
                <h1>Janet Bray</h1>
                <p>DEVELOPER</p>
                </div>
              </li>
            </ul>
            <div className="div">
            </div>
          </div>
        </footer>
        <footer className='footer'>
          <div className="container div">
          <ul className="footer__list">
              <li className="footer__item">
                <a><img src={logos1} alt="" /></a>
              </li>
              <li className="footer__item">
                <p>© Start, 2022. All rights reserved.</p>
              </li>
            </ul>
          </div>
        </footer>
    </div>
  )
}

export default Footer