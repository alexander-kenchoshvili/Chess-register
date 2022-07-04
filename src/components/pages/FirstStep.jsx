import React from 'react';
import './FirstStep.css';
import Logo from '../../images/Khight cup logo.png';
import Input from '../UI/input/Input';
import Button from '../UI/button/Button';
import ArrowRight from '../../images/arrow-right-circle.png';

function FirstStep(props) {
    console.log(props)


    
  return (
      <div>
          <div className='secondary-logo'>
              <img className='logo' src={Logo} alt="Logo" />
          </div>
          <div className='first-cover'></div>
          <div className='cover-caption'>
              <h2>"when you see a good move, look for a better one"</h2>
              <span>-emanuel lasker</span>
          </div>
          <div className='personal-info'>
              <div className='personal-info-title'>start creating your account</div>
              <div className='register-steps'>
                  <div className='first-step'>
                      <div className='starting-numeration' >1</div>
                      <span>Personal information</span>
                  </div>
                  <div className='second-step'>
                      <div className='ending-numeration'>2</div>
                      <span>Chess experience</span>
                  </div>
              </div>
              <div className='info-field-caption'>
                <h2>Personal information</h2>
                <span>this is basic information fields</span>
            </div>
          </div>
          <div className='form-field'>
              <form action="">
                  <Input
                      placeholder='name'
                      type='text'
                  />
                  <Input
                      placeholder='Email address'
                      type='email'

                  />
                  <Input
                      placeholder="Phone number"
                      type='number'
                  />
                  <Input
                      placeholder='Date of birth'
                      type='date'
                  />
                  <div className='buttons'>
                    <Button onClick={props.onPrevPage} className='prev-btn'>Back</Button>
                    <Button className='next-btn' >next
                            <img src={ArrowRight} alt="arrow" />
                    </Button>
                  </div>
              </form>
          </div>
    </div>
  )
}

export default FirstStep