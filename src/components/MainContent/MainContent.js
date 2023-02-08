import React from 'react';

import Container from '../UI/Container/Container';
import classes from './MainContent.module.css';

const stepsTitleAndSubtitle = [
  {
    step: 1,
    title: 'Personal info',
    subtitle: 'Please provide your name, email address, and phone number.',
  },
  {
    step: 2,
    title: 'Select your plan',
    subtitle: 'You have the option of monthly or yearly billing.',
  },
  {
    step: 3,
    title: 'Pick add-ons',
    subtitle: 'Add-ons help enhance your gaming experience.',
  },
  {
    step: 4,
    title: 'Finishing up',
    subtitle: 'Double-check everything looks OK before confirming.',
  },
];

const MainContent = ({ step }) => {
  return (
    <Container className={classes['main-content']}>
      <h2 className={classes.title}>{stepsTitleAndSubtitle[step - 1].title}</h2>
      <p className={classes.subtitle}>
        {stepsTitleAndSubtitle[step - 1].subtitle}
      </p>
      <p className={classes.remove}>Something according to current step</p>
    </Container>
  );
};

export default MainContent;
