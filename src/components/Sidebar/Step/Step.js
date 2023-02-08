import React from 'react';

import classes from './Step.module.css';

const Step = (props) => {
  return (
    <div className={classes.step}>
      <div className={classes.number}>{props.number}</div>
      <div className={classes.info}>
        <span>{`Step ${props.number}`}</span>
        <span className={classes.text}>{props.text}</span>
      </div>
    </div>
  );
};

export default Step;
