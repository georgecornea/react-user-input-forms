// import { useState } from 'react';
import useInput from './hooks/use-input';

const SimpleInput = (props) => {
  const {
    input: name,
    error: nameError,
    inputChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    resetInput: resetName,
  } = useInput((name) => name.trim() !== '');

  const {
    input: email,
    error: emailError,
    inputChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    resetInput: resetEmail,
  } = useInput((email) => email.includes('@'));

  let isFormValid;

  // we can combine other inputs
  if (!nameError && !emailError) {
    isFormValid = true;
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (!isFormValid) {
      return;
    }

    resetName();
    resetEmail();

    const formValues = { name, email };

    console.log(formValues);
  };

  const inputClassCss = nameError ? 'form-control invalid' : 'form-control';

  const emailClassesCss = emailError ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={onSubmitHandler}>
      <div className={inputClassCss}>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text'
          id='name'
          value={name}
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          // ref={inputRef}
          // onFocus={inputOnFocusHandler}
        />
        {nameError && <p className='error-text'>Invalid Name!</p>}
      </div>
      <div className={emailClassesCss}>
        <label htmlFor='email'>Email Address</label>
        <input
          type='email'
          id='email'
          value={email}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          // ref={inputRef}
          // onFocus={inputOnFocusHandler}
        />
        {emailError && <p className='error-text'>Invalid email!</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!isFormValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
