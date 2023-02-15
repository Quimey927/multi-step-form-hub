import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Button from '../UI/Button/Button';
import { stepActions } from '../../store/stepSlice';
import classes from './StepActions.module.css';

const StepActions = () => {
  const step = useSelector((state) => state.step.step);
  const dispatch = useDispatch();

  const decrementStepHandler = () => {
    dispatch(stepActions.decrementStep());
  };

  const incrementStepHandler = () => {
    dispatch(stepActions.incrementStep());
  };

  return (
    <div className={classes['step-actions']}>
      {step !== 1 ? (
        <Button className={classes.backBtn} onClick={decrementStepHandler}>
          Go Back
        </Button>
      ) : (
        <button style={{ visibility: 'hidden' }}></button>
      )}
      {step === 1 ? (
        <Button className={`${classes.nextBtn} ${classes['submit-button']}`}>
          <label htmlFor="submit-form" className={classes.label} tabIndex="0">
            Next Step
          </label>
        </Button>
      ) : step !== 4 ? (
        <Button className={classes.nextBtn} onClick={incrementStepHandler}>
          Next Step
        </Button>
      ) : (
        <Button className={classes.confirmBtn} onClick={incrementStepHandler}>
          Confirm
        </Button>
      )}
    </div>
  );
};

export default StepActions;
