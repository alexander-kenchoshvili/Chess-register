import React from 'react';
import './Home.css';
import Logo from '../../images/Khight cup logo.png';
import ArrowRight from '../../images/arrow-right-circle.png';
import Button from '../UI/button/Button';


function Home(props) {
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
          <Button onClick={props.onNextPage}  className='get-started'>Get Started
            <img src={ArrowRight} alt="arrow" />
          </Button>
    </div>
  )
}

export default Home