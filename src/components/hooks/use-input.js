import { useState } from 'react';

const useInput = (validateInput) => {
  const [input, setInput] = useState('');
  const [isInputEdited, setIsInputEdited] = useState(false);

  const isInputValid = validateInput(input);
  const error = !isInputValid && isInputEdited;

  const inputChangeHandler = (e) => {
    setInput(e.target.value);
  };

  const inputBlurHandler = (e) => {
    setIsInputEdited(true);
  };

  const resetInput = (e) => {
    setInput('');
    setIsInputEdited(false);
  };

  return {
    input,
    error,
    inputChangeHandler,
    inputBlurHandler,
    resetInput,
  };
};

export default useInput;
