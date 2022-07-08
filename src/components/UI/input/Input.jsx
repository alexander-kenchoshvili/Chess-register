import React from 'react';
import './Input.css';
import Error from '../../../images/assignment.svg';
import Valid from '../../../images/valid.png';

function Input(props) {
  const handleFocus = (e) => {
    e.target.style.display = 'none';
    e.target.nextElementSibling.focus();
  }
  const inputFocus = (e) => {
    e.target.previousElementSibling.style.display = 'none'
  }
  const resetInputFocus =  (e) => {
    if (e.target.value === '') {
      e.target.previousElementSibling.style.display = 'block';
    }
  }
  const checkError = props.nameInputIsInvalid || props.emailInputIsInvalid || props.numberInputIsInvalid || props.ageInputIsInvalid;
  return (
    <div className='input-field'>
      <label className={props.value !== '' ? 'label-control hide' : checkError ?
        'label-control error' : 'label-control'} htmlFor={props.id} onClick={handleFocus}>
        {props.label}
        <span>*</span></label>
      <input 
        className={checkError?'input-control invalid':'input-control'}
        type={props.type}
        id={props.id}
        onFocus={inputFocus}
        value={props.value}
        onChange={props.onChange}
        onBlur={resetInputFocus}
      />
      {checkError &&
      <div className='error-message'>
          <div className='invalid-field'>
            <span className='circle'>
              <img src={Error} alt="error" />
            </span>
            <p>{props.errHead }</p>
          </div>
          <div className='error-txt'>{props.errInstruction}</div>
        </div>}
      {!checkError && props.validSign &&
        <div className='valid-sign'>
          <img src={Valid} alt="valid" />
        </div>}
    </div>
  )
}

export default Input