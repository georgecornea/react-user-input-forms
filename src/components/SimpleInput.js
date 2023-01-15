import { useRef, useState } from 'react';

const SimpleInput = (props) => {
  const [input, setInput] = useState('');
  const [isInputValid, setIsInputValid] = useState(true);
  // const inputRef = useRef();

  const inputOnChangeHandler = (e) => {
    setInput(e.target.value);
  };

  const inputOnFocusHandler = () => {
    setInput('');
    setIsInputValid(true);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    // if input is empty, we just return
    if (input.trim().length === 0) {
      setIsInputValid(false);
      return;
    }

    setIsInputValid(true);

    console.log(input);
  };

  const inputClassCss = isInputValid ? 'form-control' : 'form-control invalid';

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
        {!isInputValid && <p className='error-text'>Invalid Input!</p>}
      </div>
      <div className='form-actions'>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
