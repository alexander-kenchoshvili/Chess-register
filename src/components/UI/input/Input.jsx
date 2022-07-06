import React from 'react';
import './Input.css';
import Error from '../../../images/assignment.svg';

function Input(props) {
  console.log(props.numberInputIsInvalid)
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

  return (
    <div className='input-field'>
      <label htmlFor={props.id} onClick={handleFocus} >{ props.label} <span>*</span>  </label>
      <input
        type={props.type}
        id={props.id}
        onFocus={inputFocus}
        value={props.value}
        onChange={props.onChange}
        onBlur={resetInputFocus}
      />
      {(props.nameInputIsInvalid ||
        props.emailInputIsInvalid ||
        props.numberInputIsInvalid ||
        props.ageInputIsInvalid) &&
      <div className='error-message'>
          <div className='invalid-field'>
            <span className='circle'>
              <img src={Error} alt="error" />
            </span>
            <p>{props.errHead }</p>
          </div>
          <div className='error-txt'>{props.errInstruction}</div>
      </div>}
    </div>
  )
}

export default Input