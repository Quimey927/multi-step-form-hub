import React from 'react';
import { useSelector } from 'react-redux';

import PersonalInfoForm from './PersonalInfoForm/PersonalInfoForm';
import SelectingPlan from './SelectingPlan/SelectingPlan';
import AddOns from './AddOns/AddOns';
import FinishingUp from './FinishingUp/FinishingUp';
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

const MainContent = () => {
  const step = useSelector((state) => state.step.step);

  return (
    <Container className={classes['main-content']}>
      <h2 className={classes.title}>{stepsTitleAndSubtitle[step - 1].title}</h2>
      <p className={classes.subtitle}>
        {stepsTitleAndSubtitle[step - 1].subtitle}
      </p>
      {step === 1 && <PersonalInfoForm />}
      {step === 2 && <SelectingPlan />}
      {step === 3 && <AddOns />}
      {step === 4 && <FinishingUp />}
    </Container>
  );
};

export default MainContent;
