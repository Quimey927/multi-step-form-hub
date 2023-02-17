import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Plan from './Plan/Plan';
import { planActions } from '../../../store/planSlice';
import classes from './SelectingPlan.module.css';

const SelectingPlan = () => {
  const dispatch = useDispatch();
  const { isMonthly, plan } = useSelector((state) => state.plan);

  const plans = [
    {
      plan: 'Arcade',
      price: isMonthly ? '$9/mo' : '$90/yr',
    },
    {
      plan: 'Advanced',
      price: isMonthly ? '$12/mo' : '$120/yr',
    },
    {
      plan: 'Pro',
      price: isMonthly ? '$15/mo' : '$150/yr',
    },
  ];

  return (
    <>
      <form className={classes.plans}>
        {plans.map((elem) => (
          <Plan
            key={elem.plan}
            className={plan === elem.plan ? 'selected-item' : ''}
            plan={elem.plan}
            price={elem.price}
            isMonthly={isMonthly}
            onClick={() => {
              dispatch(planActions.setPlan(elem.plan));
              dispatch(planActions.setPrice(elem.price));
            }}
            tabIndex="0"
          />
        ))}
      </form>
      <form className={classes.period}>
        <span className={isMonthly ? classes['active-period'] : ''}>
          Monthly
        </span>
        <div className={classes['switch-button']}>
          <input
            className={classes['switch-button__checkbox']}
            type="checkbox"
            role="switch"
            id="switch"
            checked={!isMonthly}
            onChange={() => dispatch(planActions.togglePeriod())}
          />
          <label
            htmlFor="switch"
            className={classes['switch-button__label']}
          ></label>
        </div>
        <span className={!isMonthly ? classes['active-period'] : ''}>
          Yearly
        </span>
      </form>
    </>
  );
};

export default SelectingPlan;
