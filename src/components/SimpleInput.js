import { useState } from 'react';

const SimpleInput = (props) => {
  const [input, setInput] = useState('');
  const [isInputValid, setIsInputValid] = useState(false);
  const [isInputEdited, setIsInputEdited] = useState(false);
  // const inputRef = useRef();

  const inputOnChangeHandler = (e) => {
    setInput(e.target.value);
  };

  const inputOnFocusHandler = () => {
    setInput('');
    setIsInputEdited(false);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setIsInputEdited(true);

    // if input is empty, we just return
    if (input.trim().length === 0) {
      setIsInputValid(false);
      return;
    }

    setIsInputValid(true);

    console.log(input);
  };

  const isNameInputInvalid = !isInputValid && isInputEdited;
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
          // ref={inputRef}
          onFocus={inputOnFocusHandler}
        />
        {isNameInputInvalid && <p className='error-text'>Invalid Input!</p>}
      </div>
      <div className='form-actions'>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
