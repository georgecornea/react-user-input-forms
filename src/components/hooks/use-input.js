import { useReducer } from 'react';

// initial state for the reducer function
const intitalState = {
  inputValue: '',
  isInputEdited: false,
};

// reducer takes previousState pass by React
// and and and action pass by React, but need to use it in the code
// return initially a default state, and then based on action dispached
const inputStateReducer = (state, action) => {
  if (action.type === 'INPUT') {
    return { inputValue: action.value, isInputEdited: state.isInputEdited };
  }

  if (action.type === 'BLUR') {
    return { isInputEdited: true, inputValue: state.inputValue };
  }

  if (action.type === 'RESET') {
    return { isInputEdited: false, inputValue: '' };
  }

  //   return intitalState; - just used as dummy value
};

const useInput = (validateInput) => {
  // useReducer takes the the reducer funcion and the initial state
  // returns an array with two elements
  // manages state and a dispacher that allow us to dispach actions
  const [inputState, dispach] = useReducer(inputStateReducer, intitalState);

  // don't required when we use useReducer()
  //   const [input, setInput] = useState('');
  //   const [isInputEdited, setIsInputEdited] = useState(false);

  const isInputValid = validateInput(inputState.inputValue);
  const error = !isInputValid && inputState.isInputEdited;

  const inputChangeHandler = (e) => {
    // don't required when we use useReducer()
    // setInput(e.target.value);

    // we pass action type and action value
    dispach({ type: 'INPUT', value: e.target.value });
  };

  const inputBlurHandler = (e) => {
    // don't required when we use useReducer()
    // setIsInputEdited(true);

    // we pass only action type
    dispach({ type: 'BLUR' });
  };

  const resetInput = (e) => {
    // don't required when we use useReducer()
    //setInput('');
    //setIsInputEdited(false);

    // we pass only action type
    dispach({ type: 'RESET' });
  };

  return {
    input: inputState.inputValue,
    error,
    inputChangeHandler,
    inputBlurHandler,
    resetInput,
  };
};

export default useInput;
