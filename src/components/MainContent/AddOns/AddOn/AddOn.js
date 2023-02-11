import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Container from '../../../UI/Container/Container';
import { addOnsActions } from '../../../../store/addOnsSlice';
import classes from './AddOn.module.css';

const AddOn = (props) => {
  const dispatch = useDispatch();
  const isAddOnSelected = useSelector((state) => state.addOns[props.title]);

  const addOnClasses = `${classes['add-on']} ${props.className}`;

  return (
    <Container className={addOnClasses}>
      <input
        type="checkbox"
        onChange={() => dispatch(addOnsActions.toggleAddOn(props.title))}
        checked={isAddOnSelected}
      />
      <div className={classes['add-on__description']}>
        <h3>{props.title}</h3>
        <h5>{props.description}</h5>
      </div>
      <span>{props.price}</span>
    </Container>
  );
};

export default AddOn;
