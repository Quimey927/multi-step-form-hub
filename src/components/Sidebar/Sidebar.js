import React from 'react';

import Container from '../UI/Container/Container';
import Step from './Step/Step';
import classes from './Sidebar.module.css';

const steps = [
  { number: 1, text: 'Your Info' },
  { number: 2, text: 'Select Plan' },
  { number: 3, text: 'Add-ons' },
  { number: 4, text: 'Summary' },
];

const Sidebar = () => {
  return (
    <Container className={classes.sidebar}>
      {steps.map((step) => (
        <Step number={step.number} text={step.text} key={step.number} />
      ))}
    </Container>
  );
};

export default Sidebar;
