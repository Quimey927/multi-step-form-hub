import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Plan from './Plan/Plan';
import { planActions } from '../../../store/planSlice';
import classes from './SelectingPlan.module.css';
import ArcadeIcon from '../../../assets/images/icon-arcade.svg';
import AdvancedIcon from '../../../assets/images/icon-advanced.svg';
import ProIcon from '../../../assets/images/icon-pro.svg';

const SelectingPlan = () => {
  const dispatch = useDispatch();
  const { isMonthly, plan } = useSelector((state) => state.plan);

  const plans = [
    {
      plan: 'Arcade',
      price: isMonthly ? '$9/mo' : '$90/yr',
      icon: ArcadeIcon,
    },
    {
      plan: 'Advanced',
      price: isMonthly ? '$12/mo' : '$120/yr',
      icon: AdvancedIcon,
    },
    {
      plan: 'Pro',
      price: isMonthly ? '$15/mo' : '$150/yr',
      icon: ProIcon,
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
            icon={elem.icon}
            onClick={() => {
              dispatch(planActions.setPlan(elem.plan));
              dispatch(planActions.setPrice(elem.price));
            }}
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
