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
      <Button className={classes.backBtn} onClick={decrementStepHandler}>
        Go Back
      </Button>
      {step === 2 || step === 3 ? (
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
