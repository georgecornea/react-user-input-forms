import useInput from './hooks/use-input';

const BasicForm = (props) => {
  const isNotEmpty = (value) => value.trim() !== '';
  const isEmail = (value) => value.includes('@');

  const {
    input: firstName,
    error: firstNameError,
    inputChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    resetInput: resetFirstName,
  } = useInput(isNotEmpty);

  const {
    input: lastName,
    error: lastNameError,
    inputChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    resetInput: resetLastName,
  } = useInput(isNotEmpty);

  const {
    input: email,
    error: emailError,
    inputChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    resetInput: resetEmail,
  } = useInput(isEmail);

  let isFormValid;
  if (!firstNameError && !lastNameError && !emailError) {
    isFormValid = true;
  }

  const submitHandler = (e) => {
    e.preventDefault();

    if (!isFormValid) {
      return;
    }

    const formValues = {
      firstName,
      lastName,
      email,
    };

    resetFirstName();
    resetLastName();
    resetEmail();

    console.log(formValues);
  };

  const firstNameErrorClass = firstNameError
    ? 'form-control invalid'
    : 'form-control';

  const lastNameErrorClass = lastNameError
    ? 'form-control invalid'
    : 'form-control';

  const emailErrorClass = emailError ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={submitHandler}>
      <div className='control-group'>
        <div className={firstNameErrorClass}>
          <label htmlFor='firstName'>First Name</label>
          <input
            type='text'
            id='firstName'
            value={firstName}
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
          />
          {firstNameError && <p className='error-text'>Invalid First Name</p>}
        </div>
        <div className={lastNameErrorClass}>
          <label htmlFor='lastName'>Last Name</label>
          <input
            type='text'
            id='lastName'
            value={lastName}
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
          />
          {lastNameError && <p className='error-text'>Invalid Last Name</p>}
        </div>
      </div>
      <div className={emailErrorClass}>
        <label htmlFor='email'>E-Mail Address</label>
        <input
          type='teemailxt'
          id='email'
          value={email}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailError && <p className='error-text'>Invalid Email</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!isFormValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
