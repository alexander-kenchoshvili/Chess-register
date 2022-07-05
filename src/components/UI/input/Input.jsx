import React from 'react';
import './Input.css';

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
  return (
    <div className='input-field'>
      <label htmlFor={props.id} onClick={handleFocus} >{ props.label} <span>*</span>  </label>
      <input
        type={props.type}
        id={props.id}
        onFocus={inputFocus}
        value={props.value}
        defaultValue={props.defaultValue}
        onChange={props.onChange}
        onBlur={resetInputFocus}
        placeholder={props.placeholder}
    />
    </div>
  )
}

export default Input