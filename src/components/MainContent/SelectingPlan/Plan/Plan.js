import React from 'react';

import Container from '../../../UI/Container/Container';
import classes from './Plan.module.css';
import Icon from '../../../../assets/images/icon-arcade.svg';

const Plan = (props) => {
  const planClasses = `${classes.plan} ${props.className}`;

  return (
    <Container className={planClasses} onClick={props.onClick}>
      <img
        className={classes['plan__icon']}
        src={Icon}
        alt={`${props.plan} icon`}
      />
      <div className={classes['plan__info']}>
        <h3>{props.plan}</h3>
        <h5>{props.price}</h5>
        {!props.isMonthly && <p>2 months free</p>}
      </div>
    </Container>
  );
};

export default Plan;
