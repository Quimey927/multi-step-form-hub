import React from 'react';
import { useSelector } from 'react-redux';

import classes from './Step.module.css';

const Step = (props) => {
  const step = useSelector((state) => state.step.step);

  const numberClasses =
    step === props.number || (step === 5 && props.number === 4)
      ? `${classes.number} ${classes.active}`
      : `${classes.number}`;

  return (
    <div className={classes.step}>
      <div className={numberClasses}>{props.number}</div>
      <div className={classes.info}>
        <span>{`Step ${props.number}`}</span>
        <span className={classes.text}>{props.text}</span>
      </div>
    </div>
  );
};

export default Step;
