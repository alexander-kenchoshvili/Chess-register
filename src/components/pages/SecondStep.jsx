import React,{useState} from 'react';
import Logo from '../../images/Khight cup logo.png';
import "./SecondStep.css";
import Vector from '../../images/Vector.png';
import VectorDown from '../../images/Vector-down.png';
import VectorUp from '../../images/Vector-up.png';
import Button from '../UI/button/Button';
import ArrowRight from '../../images/arrow-right-circle.png';

function SecondStep(props) {

    const dropdownOptions = ['begginer', 'intermediate', 'professional'];
    const [selectIsValid,setSelectIsValid] = useState(false)

    const [activeChoice, setActiveChoice] = useState(false);
    const [chooseOption, setChooseOption] = useState('');

    const [activeCharacter, setActiveCharacter] = useState(false);
    const [chooseCharacter, setChooseCharacter] = useState('');

    const changeChoice = (e) => {
        setChooseOption(e.target.textContent)
        e.target.parentElement.parentElement.parentElement.firstChild.style.display = 'none';
    }
    const handleActiveChoice = () => { setActiveChoice(!activeChoice) };
    const onMouseBlur = () => { setActiveChoice(false) }

    const changeCharacter = (e) => {
        setChooseCharacter(e.target.textContent);
        e.target.parentElement.parentElement.parentElement.firstChild.style.display = 'none';
    }
    const handleActiveCharacter = () => { setActiveCharacter(!activeCharacter) };
    const characterBlur = ()=>{setActiveCharacter(false)}

    const [radioBtn, setRadioBtn] = useState('');

    const handleRadioChange = (e)=>{setRadioBtn(e.target.value)}

    const levelIsValid = chooseOption !== '';
    const characterIsValid = chooseCharacter !== '';
    const radioIsValid = radioBtn !== '';
    const checkError = !levelIsValid || !characterIsValid || !radioIsValid;
  
    const submitHandler = (e) => {
        e.preventDefault();
        setSelectIsValid(true);
        if (checkError ) {
            return;
        }
        props.onNextPage();
    }
    const errorLabel = checkError && selectIsValid ? 'label-control error' : 'label-control';
    const errorInput = checkError && selectIsValid ? 'input-control invalid' : 'input-control';
    const errorRadio = checkError && selectIsValid ? 'radio-title err' : 'radio-title';
    const changeBtnTxt = !checkError ?  'done':'next';
    return (
      <div>
          <div className='secondary-logo'>
              <img className='logo' src={Logo} alt="logo" />
          </div>
          <div className='second-cover'></div>
          <div className='second-cover-caption'>
              <h2>"many have become chess masters;</h2>
              <h2>no one has become the master of chess."</h2>
              <span>- siegbert tarrasch</span>
          </div>
          <div className='chess-experience'>
              <div className='chess-experience-title'>First step is done, continue to finish onboarding</div>
              <div className='register-steps'>
                  <div className='first-step'>
                      <div className='starting-numeration' >
                          <img src={Vector} alt="done-mark" />
                      </div>
                      <span>Personal information</span>
                  </div>
                  <div className='second-step'>
                      <div className='ending-numeration'>2</div>
                      <span>Chess experience</span>
                  </div>
              </div>
              <div className='info-field-caption'>
                <h2>Chess experience</h2>
                <span>this is basic information fields</span>
            </div>
          </div>
          <div className='form-section'>
              <form onSubmit={submitHandler} >
                <div className='select-field'>
                    <div className='select-inputs'>
                        <label htmlFor="" className={errorLabel}  onMouseDown={handleActiveChoice} >Level of knowledge <span>*</span> </label>
                        <input className={errorInput} value={chooseOption} onChange={changeChoice}  onBlur={onMouseBlur} onMouseDown={handleActiveChoice} type="text" />
                        {activeChoice?<img className='arrow-up' src={VectorUp} alt='arrowUp'/> :<img className='arrow-down' onMouseDown={handleActiveChoice} src={VectorDown} alt="arrowDown" /> }
                        <div className={activeChoice?'selected active':'selected' }>
                            <ul>
                                {dropdownOptions.map((item,index) => {
                                    return <li  onMouseDown={changeChoice} key={index}>{item }</li>
                                })}
                            </ul>
                    </div>
                </div>
                </div>
                <div className='select-character'>
                    <div className='characters'>
                        <label onMouseDown={handleActiveCharacter} className={errorLabel}  htmlFor="">Choose your character <span>*</span> </label>
                        <input value={chooseCharacter} className={errorInput} onMouseDown={handleActiveCharacter} onBlur={characterBlur} onChange={changeCharacter} type="text" />
                        {activeCharacter ? <img className='arrow-up' src={VectorUp} alt='arrowUp' /> 
                        : <img className='arrow-down' onMouseDown={handleActiveCharacter} src={VectorDown} alt="arrowDown" />}
                        <div className={activeCharacter ? 'character-list active' : 'character-list'}>
                            <ul>
                                <span>(total 4)</span>
                                <li onMouseDown={changeCharacter}>1</li>
                                <li onMouseDown={changeCharacter}>2</li>
                                <li onMouseDown={changeCharacter}>3</li>
                                <li onMouseDown={changeCharacter}>4</li>
                                <li onMouseDown={changeCharacter}>5</li>
                            </ul>
                        </div>
                    </div>
                </div>  
                <div className='radioBtn'>
                    <p className={errorRadio}>Have you participated in the Redberry Championship? <span>*</span></p>
                    <div className='radioInputs'>
                    <div className='yesBtn'>
                        <input type="radio" value="Yes" id='yes' name="checkExperience" onChange={handleRadioChange} /> 
                        <label htmlFor="yes">Yes</label>
                    </div>
                    <div className='noBtn'>
                        <input type="radio" value="No" id='no' name="checkExperience" onChange={handleRadioChange} />
                        <label htmlFor="no">No</label>
                    </div>
                    </div>
                </div>
                <div className='next-prev-btn'>
                    <Button onClick={props.onPrevPage} className='prev-btn'>Back</Button>
                    <Button
                        // onClick={props.onNextPage}
                        type='submit'
                        className='next-btn'>
                        {changeBtnTxt}
                        <img src={ArrowRight} alt="arrow" />
                    </Button>
                </div>
              </form>
          </div>
    </div>
  )
}

export default SecondStep