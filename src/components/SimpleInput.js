import { useRef, useState } from 'react';

const SimpleInput = (props) => {
  const [input, setInput] = useState('');
  const inputRef = useRef();

  const inputOnChangeHandler = (e) => {
    setInput(e.target.value);
  };

  const inputOnFocusHandler = () => {
    setInput('');
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    //console.log(input);
    console.log(inputRef.current.value);
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text'
          id='name'
          value={input}
          onChange={inputOnChangeHandler}
          ref={inputRef}
          onFocus={inputOnFocusHandler}
        />
      </div>
      <div className='form-actions'>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
