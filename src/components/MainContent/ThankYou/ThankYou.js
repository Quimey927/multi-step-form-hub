import React from 'react';

import Icon from '../../../assets/images/icon-arcade.svg';

import classes from './ThankYou.module.css';

const ThankYou = () => {
  return (
    <div className={classes.container}>
      <div className={classes['thank-you']}>
        <img
          className={classes['thank-you__icon']}
          src={Icon}
          alt={'Finished Form icon'}
        />
        <h2 className={classes['thank-you__title']}>Thank you!</h2>
        <p className={classes['thank-you__subtitle']}>
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </p>
      </div>
    </div>
  );
};

export default ThankYou;
