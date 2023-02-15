import React from 'react';
import { useSelector } from 'react-redux';

import Container from '../../../UI/Container/Container';
import classes from './AddOn.module.css';

const AddOn = (props) => {
  const isAddOnSelected = useSelector((state) => state.addOns[props.title]);

  const addOnClasses = `${classes['add-on']} ${props.className}`;

  return (
    <Container className={addOnClasses} onClick={props.onClick}>
      <input type="checkbox" checked={isAddOnSelected} onChange={() => {}} />
      <div className={classes['add-on__description']}>
        <h3>{props.title}</h3>
        <h5>{props.description}</h5>
      </div>
      <span>{props.price}</span>
    </Container>
  );
};

export default AddOn;
