import React from 'react';
import './Input.css';

function Input(props) {
    
  return (
      <div className='input-field'>
          <input
              type={props.type}
              id={props.id}
              value={props.value}
              onChange={props.onChange}
              onBlur={props.onBlur}
              placeholder={props.placeholder}
          />
    </div>
  )
}

export default Input