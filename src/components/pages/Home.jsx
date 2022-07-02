import React from 'react';
import './Home.css';
import Logo from '../../images/Khight cup logo.png';
import ArrowRight from '../../images/arrow-right-circle.png';


function Home(props) {
    console.log(props)
  return (
      <div>
          <div className='header-logo'>
              <img className='logo' src={Logo} alt="Logo" />
          </div>
          <div className='landing-image'></div>
          <div className='landing-title'>
              <h2>CHESS SAYS <span>A LOT ABOUT</span></h2>
              <h3>WHO WE ARE</h3>
          </div>
          <button onClick={props.onPageChange}  className='get-started'>Get Started
            <img src={ArrowRight} alt="arrow" />
          </button>
    </div>
  )
}

export default Home