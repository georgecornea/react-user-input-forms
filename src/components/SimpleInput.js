import { useState } from 'react';

const SimpleInput = (props) => {
  const [input, setInput] = useState('');
  const [isInputEdited, setIsInputEdited] = useState(false);
  // const [isFormValid, setIsFormValid] = useState(false);
  // const inputRef = useRef();

  const isInputValid = input.trim() !== '';
  const isNameInputInvalid = !isInputValid && isInputEdited;
  let isFormValid = false;

  // we can combine other inputs
  if (isInputValid) {
    isFormValid = true;
  }

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

    console.log(input);
  };

  const inputClassCss = isNameInputInvalid
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
      <div className='form-actions'>
        <button disabled={!isFormValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
