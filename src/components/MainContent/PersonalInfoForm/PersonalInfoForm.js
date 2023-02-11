import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import Container from '../../UI/Container/Container';
import { infoActions } from '../../../store/infoSlice';
import classes from './PersonalInfoForm.module.css';

const PersonalInfoForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const personalInfo = {
      name,
      email,
      phone,
    };

    dispatch(infoActions.setPersonalInfo(personalInfo));
  };

  return (
    <Container>
      <form className={classes.form} onSubmit={handleSubmit}>
        <div className={classes['form-group']}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            placeholder="e.g. Stephen King"
            onChange={(evt) => setName(evt.target.value)}
          />
        </div>
        <div className={classes['form-group']}>
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            vale={email}
            placeholder="e.g. stephenking@lorem.com"
            onChange={(evt) => setEmail(evt.target.value)}
          />
        </div>
        <div className={classes['form-group']}>
          <label htmlFor="phone">Phone Number</label>
          <input
            type="text"
            id="phone"
            value={phone}
            placeholder="e.g. +1 234 567 890"
            onChange={(evt) => setPhone(evt.target.value)}
          />
        </div>
      </form>
    </Container>
  );
};

export default PersonalInfoForm;
