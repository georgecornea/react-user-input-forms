import { useState } from 'react';

const SimpleInput = (props) => {
  const [input, setInput] = useState('');
  const [isInputEdited, setIsInputEdited] = useState(false);
  // const [isFormValid, setIsFormValid] = useState(false);
  // const inputRef = useRef();

  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  const enteredEmailIsValid = enteredEmail.includes('@');
  const enteredEmailIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

  const isInputValid = input.trim() !== '';
  const isNameInputInvalid = !isInputValid && isInputEdited;
  let isFormValid = false;

  // we can combine other inputs
  if (isInputValid && enteredEmailIsValid) {
    isFormValid = true;
  }

  const enteredEmailChangeHandler = (e) => {
    setEnteredEmail(e.target.value);
  };

  const enteredEmailBlurHandler = (e) => {
    setEnteredEmailTouched(true);
  };

  const inputOnChangeHandler = (e) => {
    setInput(e.target.value);
  };

  const inputOnFocusHandler = () => {
    setInput('');
    setIsInputEdited(false);
  };

  const inputOnBlurHandle = () => {
    setIsInputEdited(true);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setIsInputEdited(true);

    // if input is empty, we just return
    if (!isInputValid) {
      return;
    }

    setEnteredEmail('');
    setEnteredEmailTouched(false);

    console.log(input);
  };

  const inputClassCss = isNameInputInvalid
    ? 'form-control invalid'
    : 'form-control';

  const emailClassesCss = enteredEmailIsInvalid
    ? 'form-control invalid'
    : 'form-control';

  return (
    <form onSubmit={onSubmitHandler}>
      <div className={inputClassCss}>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text'
          id='name'
          value={input}
          onChange={inputOnChangeHandler}
          onBlur={inputOnBlurHandle}
          // ref={inputRef}
          onFocus={inputOnFocusHandler}
        />
        {isNameInputInvalid && <p className='error-text'>Invalid Input!</p>}
      </div>
      <div className={emailClassesCss}>
        <label htmlFor='email'>Email Address</label>
        <input
          type='email'
          id='email'
          value={enteredEmail}
          onChange={enteredEmailChangeHandler}
          onBlur={enteredEmailBlurHandler}
          // ref={inputRef}
          // onFocus={inputOnFocusHandler}
        />
        {enteredEmailIsInvalid && <p className='error-text'>Invalid email!</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!isFormValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
