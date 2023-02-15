import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import useInput from '../../../hooks/useInput';
import Container from '../../UI/Container/Container';
import { infoActions } from '../../../store/infoSlice';
import { stepActions } from '../../../store/stepSlice';
import classes from './PersonalInfoForm.module.css';

const PersonalInfoForm = () => {
  const dispatch = useDispatch();
  const { name, email, phone } = useSelector((state) => state.info);

  const {
    enteredValue: enteredName,
    valueIsTouched: nameIsTouched,
    valueHasError: nameHasError,
    valueIsValid: nameIsValid,
    setValueIsTouched: setNameIsTouched,
    valueInputChangeHandler: nameInputChangeHandler,
    valueInputBlurHandler: nameInputBlurHandler,
  } = useInput((value) => value.trim() !== '', 'name');

  const {
    enteredValue: enteredEmail,
    valueIsTouched: emailIsTouched,
    valueHasError: emailHasError,
    valueIsValid: emailIsValid,
    setValueIsTouched: setEmailIsTouched,
    valueInputChangeHandler: emailInputChangeHandler,
    valueInputBlurHandler: emailInputBlurHandler,
  } = useInput((value) => value.includes('@'), 'email');

  const {
    enteredValue: enteredPhone,
    valueIsTouched: phoneIsTouched,
    valueHasError: phoneHasError,
    valueIsValid: phoneIsValid,
    setValueIsTouched: setPhoneIsTouched,
    valueInputChangeHandler: phoneInputChangeHandler,
    valueInputBlurHandler: phoneInputBlurHandler,
  } = useInput((value) => {
    const regex = /^\+?\d+$/; // Checks if phone is a optional '+' and numbers;
    const valueWithoutSpaces = value.replace(/\s/g, ''); // Removes spaces from phone
    return regex.test(valueWithoutSpaces);
  }, 'phone');

  let formIsValid = false;

  if (nameIsValid && emailIsValid && phoneIsValid) {
    formIsValid = true;
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (formIsValid) {
      const personalInfo = {
        name: enteredName,
        email: enteredEmail,
        phone: enteredPhone,
      };

      dispatch(infoActions.setPersonalInfo(personalInfo));
      dispatch(stepActions.incrementStep());
    } else {
      !nameIsValid && setNameIsTouched(true);
      !emailIsValid && setEmailIsTouched(true);
      !phoneIsValid && setPhoneIsTouched(true);
    }
  };

  return (
    <Container>
      <form className={classes.form} onSubmit={handleSubmit}>
        <div className={classes['form-group']}>
          <div className={classes['input-error']}>
            <label htmlFor="name">Name</label>
            {nameHasError && (
              <span className={classes['input-error__message']}>
                This field is required
              </span>
            )}
          </div>
          <input
            type="text"
            id="name"
            className={nameHasError ? classes.invalid : ''}
            value={nameIsTouched ? enteredName : name}
            placeholder="e.g. Stephen King"
            onChange={nameInputChangeHandler}
            onBlur={nameInputBlurHandler}
          />
        </div>

        <div className={classes['form-group']}>
          <div className={classes['input-error']}>
            <label htmlFor="email">Email Address</label>
            {emailHasError && (
              <span className={classes['input-error__message']}>
                Please add a valid email
              </span>
            )}
          </div>
          <input
            type="text"
            id="email"
            className={emailHasError ? classes.invalid : ''}
            value={emailIsTouched ? enteredEmail : email}
            placeholder="e.g. stephenking@lorem.com"
            onChange={emailInputChangeHandler}
            onBlur={emailInputBlurHandler}
          />
        </div>

        <div className={classes['form-group']}>
          <div className={classes['input-error']}>
            <label htmlFor="phone">Phone Number</label>
            {phoneHasError && (
              <span className={classes['input-error__message']}>
                Please add a valid phone
              </span>
            )}
          </div>
          <input
            type="text"
            id="phone"
            className={phoneHasError ? classes.invalid : ''}
            value={phoneIsTouched ? enteredPhone : phone}
            placeholder="e.g. +1 234 567 890"
            onChange={phoneInputChangeHandler}
            onBlur={phoneInputBlurHandler}
          />
        </div>

        <input
          type="submit"
          id="submit-form"
          style={{ visibility: 'hidden' }}
        />
      </form>
    </Container>
  );
};

export default PersonalInfoForm;
