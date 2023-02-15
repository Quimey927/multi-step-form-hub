import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import AddOn from './AddOn/AddOn';
import { addOnsActions } from '../../../store/addOnsSlice';
import classes from './AddOns.module.css';

const AddOns = () => {
  const isMonthly = useSelector((state) => state.plan.isMonthly);
  const addOnsStates = useSelector((state) => state.addOns);
  const dispatch = useDispatch();

  const addOns = [
    {
      title: 'Online service',
      description: 'Access to multiplayer games',
      price: isMonthly ? '+$1/mo' : '+$10/yr',
    },
    {
      title: 'Larger storage',
      description: 'Extra 1TB of cloud save',
      price: isMonthly ? '+$2/mo' : '+$20/yr',
    },
    {
      title: 'Customizable profile',
      description: 'Custom theme on your profile',
      price: isMonthly ? '+$2/mo' : '+$20/yr',
    },
  ];

  return (
    <div className={classes['add-ons']}>
      {addOns.map((elem) => (
        <AddOn
          key={elem.title}
          className={addOnsStates[elem.title] ? 'selected-item' : ''}
          title={elem.title}
          description={elem.description}
          price={elem.price}
          onClick={() => dispatch(addOnsActions.toggleAddOn(elem.title))}
        />
      ))}
    </div>
  );
};

export default AddOns;
