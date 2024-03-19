import React from 'react'
import './Main.css'
import logos from '../image/logos.svg'
import group1 from '../image/Group (1).svg'
import single from '../image/single.svg'

function Main() {
  return (
    <div>
        <section>
          <div className="container">
            <div className="hero__partners">
            <div className="partners">
              <p className='text'>P A R T N E R S</p>
              <h1 className='title'>Lorem, ipsum dolor.</h1>
              <p className='text1'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            </div>
            <img className='img' src={logos} alt="" />
            <div className="btn_group">
            <button className='btn'>Learn More</button>
            </div>
            <div className="group1">
              <img src={group1} alt="" />
              <div className="group__info">
                <h1 className='heading'>Lorem ipsum dolor sit amet consectetur</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum, voluptate culpa nesciunt delectus iste?</p>
                <button className='btn1'>Learn More</button>
              </div>
            </div>
            <div className="group1">
              <div className="group__info">
                <h1 className='heading'>Lorem ipsum dolor sit amet consectetur</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum, voluptate culpa nesciunt delectus iste?</p>
                <button className='btn1'>Learn More</button>
              </div>
              <img src={single} alt="" />
            </div>
          </div>
        </section>
    </div>
  )
}

export default Main