import React from 'react';
import './LastStep.css';
import Logo from '../../images/Khight cup logo.png';
import Icon from '../../images/rocket.png';

function LastStep() {
  return (
      <div>
          <div className='secondary-logo'>
              <img className='logo' src={Logo} alt="" />
          </div>
          <div className='last-cover'></div>
          <div className='congrats-message'>
              <img src={Icon} alt="spaceX" />
              <h2>Onboarding completed!</h2>
          </div>
    </div>
  )
}

export default LastStep