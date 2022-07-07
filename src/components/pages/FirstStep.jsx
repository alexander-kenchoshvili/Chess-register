import React, { useState } from 'react';
import './FirstStep.css';
import Logo from '../../images/Khight cup logo.png';
import Input from '../UI/input/Input';
import Button from '../UI/button/Button';
import ArrowRight from '../../images/arrow-right-circle.png';

function FirstStep(props) {

    const [validSign, setValidSign] = useState(false);
    
    const [name, setName] = useState('');
    const [nameTouched, setNameTouched] = useState(false);
    
    const [email, setEmail] = useState('');
    const [emailTouched, setEmailTouched] = useState(false);
    
    const [number, setNumber] = useState('');
    const [numberTouched, setNumberTouched] = useState(false);
    
    const [age, setAge] = useState('');
    const [ageTouched, setAgeTouched] = useState(false);
    
    const nameIsValid = name.trim().length > 2;
    const nameInputIsInvalid = !nameIsValid && nameTouched;

    const emailIsValid = email.trim().includes('@redberry.ge')
    const emailInputIsInvalid = !emailIsValid && emailTouched;

    const numberIsValid = number.trim().length === 9;
    const numberInputIsInvalid = !numberIsValid && numberTouched;

    const ageIsValid = age !== '';
    const ageInputIsInvalid = !ageIsValid && ageTouched;

    const handleNameChange = (e) => {
        setName(e.target.value)
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    };
    const handleNumberChange = (e) => {
        setNumber(e.target.value)
    };
    
    const handleAgeChange = (e) => {
        setAge(e.target.value)
    };
    const formError = !nameIsValid || !emailIsValid || !numberIsValid || !ageIsValid;
    const onSubmitHandler = (e) => {
        e.preventDefault();
        setNameTouched(true)
        setEmailTouched(true)
        setNumberTouched(true)
        setAgeTouched(true)
        setValidSign(true)
        if (formError) {
            return;
        }
        props.onNextPage()
    };
    const progressing = formError && validSign ? 'starting-numeration progress':'starting-numeration' ;
 
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
                      <div className={progressing} >1</div>
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
              <form onSubmit={ onSubmitHandler}>
                  <Input
                      label='name'
                      type='text'
                      id='type-text'
                      onChange={handleNameChange}
                      nameInputIsInvalid={nameInputIsInvalid}
                      errHead='Invalid name'
                      errInstruction='Please enter valid name'
                      formError={formError}
                      validSign={validSign}
                  />
                  <Input
                      label='Email address'
                      type='email'
                      onChange={handleEmailChange}
                      emailInputIsInvalid={emailInputIsInvalid}
                      errHead='Invalid E-mail'
                      errInstruction='Please enter valid E-mail'
                      formError={formError}
                      validSign={validSign}
                  />
                  <Input
                      label="Phone number"
                      type='number'
                      onChange={handleNumberChange}
                      numberInputIsInvalid={numberInputIsInvalid}
                      errHead='Invalid phone number'
                      errInstruction='Please enter valid phone number'
                      formError={formError}
                      validSign={validSign}
                  />
                  <Input
                      label='Date of birth'
                      type='date'
                      id='date-type'
                      ageInputIsInvalid={ageInputIsInvalid}
                      onChange={handleAgeChange}
                      errHead='Invalid age'
                      errInstruction='Please enter valid age'
                      formError={formError}
                      validSign={validSign}
                  />
                  <div className='buttons'>
                    <Button onClick={props.onPrevPage} className='prev-btn'>Back</Button>
                    <Button
                        type='submit'
                        className='next-btn'>
                        next
                        <img src={ArrowRight} alt="arrow" />
                    </Button>
                  </div>
              </form>
          </div>
    </div>
  )
}

export default FirstStep