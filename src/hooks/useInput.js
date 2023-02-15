import { useState } from 'react';
import { useSelector } from 'react-redux';

const useInput = (validateValue, id) => {
  const infoState = useSelector((state) => state.info);
  const [enteredValue, setEnteredValue] = useState(infoState[id]);
  const [valueIsTouched, setValueIsTouched] = useState(false);

  const valueIsValid = validateValue(
    valueIsTouched ? enteredValue : infoState[id]
  );

  const valueHasError = !valueIsValid && valueIsTouched;

  const valueInputChangeHandler = (evt) => {
    setEnteredValue(evt.target.value);
    setValueIsTouched(true);
  };

  const valueInputBlurHandler = (evt) => {
    setValueIsTouched(true);
  };

  return {
    enteredValue,
    valueIsTouched,
    valueIsValid,
    valueHasError,
    setValueIsTouched,
    valueInputChangeHandler,
    valueInputBlurHandler,
  };
};

export default useInput;
