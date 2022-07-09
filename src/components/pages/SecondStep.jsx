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
    const [activeCharacter, setActiveCharacter] = useState(false);
    
    const characters = [...props.characters]

    const changeChoice = (e) => {
        setActiveChoice(!activeChoice);
        props.setFormData({
            ...props.formData,
            level:e.target.textContent
        })
       e.target.parentElement.parentElement.parentElement.firstChild.style.display = 'none';
    }
 
    const handleActiveChoice = () => { setActiveChoice(!activeChoice) };
    const onMouseBlur = () => {
        setActiveChoice(false);
    }

    const changeCharacter = (id,e) => {
        setActiveCharacter(!activeCharacter)
        props.setFormData({
            ...props.formData,
            character_id:id
        })
        e.target.parentElement.parentElement.parentElement.firstChild.style.display = 'none';
    }
    const handleActiveCharacter = () => { setActiveCharacter(!activeCharacter) };
    const characterBlur = ()=>{setActiveCharacter(false)}

    const handleRadioChange = (e) => {
        props.setFormData({
            ...props.formData,
            participated: e.target.value === 'yes' 
        })
    }
    const levelIsValid = props.formData.level !== '';
    const characterIsValid = props.formData.character_id !== '';
    const radioIsValid = props.formData.participated !== '';
    const checkError = !levelIsValid || !characterIsValid || !radioIsValid;
  
    const submitHandler = (e) => {
        e.preventDefault();
        setSelectIsValid(true);
        if (checkError ) {
            return;
        }
        props.onNextPage();
    }
    const backSubmit = (e) => {
        e.preventDefault();
        props.onPrevPage();
    }
    const errorLabel = checkError && selectIsValid ? 'label-control error' : 'label-control';
    const errorInput = checkError && selectIsValid ? 'input-control invalid' : 'input-control';
    const errorRadio = checkError && selectIsValid ? 'radio-title err' : 'radio-title';
    const changeBtnTxt = !checkError ? 'done' : 'next';
    console.log(props.formData)
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
                        <label 
                            className={errorLabel}
                            onClick={handleActiveChoice}>
                            {props.formData.level ? props.formData.level : 'Level of knowladge'}
                            {!props.formData.level &&
                            <span>*</span>}
                        </label>
                        <input
                            className={errorInput}
                            value={props.formData.level}
                            onChange={changeChoice}
                            onBlur={onMouseBlur}
                            onMouseDown={handleActiveChoice} type="text"
                        />
                        {activeChoice ?<img className='arrow-up' src={VectorUp} alt='arrowUp' />
                        : <img className='arrow-down' onMouseDown={handleActiveChoice} src={VectorDown} alt="arrowDown" />}
                        <div className={activeChoice?'selected active':'selected' }>
                            <ul>
                                {dropdownOptions.map((item,index) => {
                                    return <li onMouseDown={changeChoice} key={index}>{item }</li>
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='select-character'>
                    <div className='characters'>
                        <label onMouseDown={handleActiveCharacter} className={errorLabel}>
                            {characters.find(char=>char.id === props.formData.character_id )?.name || 'choose'}
                            {!props.formData.character_id && <span>*</span>}
                        </label>
                        <input
                            value={characters.find(char => char.id === props.formData.character_id)?.name || ''}
                            readOnly className={errorInput}
                            onMouseDown={handleActiveCharacter} onBlur={characterBlur}
                            type="text"
                        />
                        {activeCharacter ? <img className='arrow-up' src={VectorUp} alt='arrowUp' /> 
                        : <img className='arrow-down' onMouseDown={handleActiveCharacter} src={VectorDown} alt="arrowDown" />}
                        <div className={activeCharacter ? 'character-list active' : 'character-list'}>
                            <ul>
                                <span>(Total {characters.length})</span>
                                {characters.map((character) => {
                                    return (
                                        <li className='participants' onMouseDown={(e)=> changeCharacter(character.id,e)} key={character.id} data-id={character.id} >{character.name} <img src={`https://chess-tournament-api.devtest.ge/${character.image}`} alt="characters" /> </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>  
                <div className='radioBtn'>
                    <p className={errorRadio}>Have you participated in the Redberry Championship? <span>*</span></p>
                    <div className='radioInputs'>
                    <div className='yesBtn'>
                        <input type="radio" value='yes' id='yes' checked={props.formData.participated===true}  name="checkExperience"  onChange={handleRadioChange} /> 
                        <label htmlFor="yes">Yes</label>
                    </div>
                    <div className='noBtn'>
                        <input type="radio" value="no" id='no'  checked={props.formData.participated===false} name="checkExperience" onChange={handleRadioChange} />
                        <label htmlFor="no">No</label>
                    </div>
                    </div>
                </div>
                <div className='next-prev-btn'>
                    <Button onClick={backSubmit} type='submit' className='prev-btn'>Back</Button>
                    <Button
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