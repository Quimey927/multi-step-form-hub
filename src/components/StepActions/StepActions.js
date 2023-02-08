import React from 'react';

import classes from './StepActions.module.css';

const StepActions = ({ step, onIncreaseStep, onDecreaseStep }) => {
  const handleConfirm = () => {
    console.log('Confirmed!');
  };

  return (
    <div className={classes['step-actions']}>
      {step !== 1 ? (
        <button
          className={`${classes.btn} ${classes.backBtn}`}
          onClick={onDecreaseStep}
        >
          Go Back
        </button>
      ) : (
        <button style={{ visibility: 'hidden' }}></button>
      )}
      {step !== 4 ? (
        <button
          className={`${classes.btn} ${classes.nextBtn}`}
          onClick={onIncreaseStep}
        >
          Next Step
        </button>
      ) : (
        <button
          className={`${classes.btn} ${classes.confirmBtn}`}
          onClick={handleConfirm}
        >
          Confirm
        </button>
      )}
    </div>
  );
};

export default StepActions;
