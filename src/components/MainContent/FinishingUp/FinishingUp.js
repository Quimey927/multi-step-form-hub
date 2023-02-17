import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Container from '../../UI/Container/Container';
import { planActions } from '../../../store/planSlice';
import classes from './FinishingUp.module.css';

const FinishingUp = () => {
  const { plan, isMonthly } = useSelector((state) => state.plan);
  const addOnsStates = useSelector((state) => state.addOns);
  const dispatch = useDispatch();

  const planPrice =
    isMonthly && plan === 'Arcade'
      ? 9
      : !isMonthly && plan === 'Arcade'
      ? 90
      : isMonthly && plan === 'Advanced'
      ? 12
      : !isMonthly && plan === 'Advanced'
      ? 120
      : isMonthly && plan === 'Pro'
      ? 15
      : 150;

  const addOnPrices = {
    'Online service': isMonthly ? 1 : 10,
    'Larger storage': isMonthly ? 2 : 20,
    'Customizable profile': isMonthly ? 2 : 20,
  };

  const currentAddOns = [];

  for (let addOn in addOnsStates) {
    if (addOnsStates[addOn]) {
      currentAddOns.push(addOn);
    }
  }

  let totalPrice = planPrice;

  for (let addOn of currentAddOns) {
    totalPrice += addOnPrices[addOn];
  }

  const changeHandler = () => {
    dispatch(planActions.togglePeriod());
    dispatch(planActions.setPrice(`$${planPrice}/${isMonthly ? 'mo' : 'yr'}`));
  };

  return (
    <>
      <Container className={classes.container}>
        <div className={classes.plan}>
          <div className={classes['plan__info']}>
            <h5>{`${plan} (${isMonthly ? 'Monthly' : 'Yearly'})`}</h5>
            <button
              onClick={changeHandler}
              role="switch"
              aria-checked={!isMonthly}
            >
              Change
            </button>
          </div>
          <div className={classes['plan__price']}>{`$${planPrice}/${
            isMonthly ? 'mo' : 'yr'
          }`}</div>
        </div>
        {currentAddOns.length > 0 && <div className={classes.line} />}
        {currentAddOns.length > 0 &&
          currentAddOns.map((addOn) => (
            <div className={classes.addOn} key={addOn}>
              <span>{addOn}</span>
              <span className={classes['addOn__price']}>
                {`$${addOnPrices[addOn]}/${isMonthly ? 'mo' : 'yr'}`}
              </span>
            </div>
          ))}
      </Container>
      <div className={classes.total}>
        <span className={classes['total__desc']}>{`Total (per ${
          isMonthly ? 'month' : 'year'
        })`}</span>
        <span className={classes['total__price']}>{`$${totalPrice}/${
          isMonthly ? 'mo' : 'yr'
        }`}</span>
      </div>
    </>
  );
};

export default FinishingUp;
