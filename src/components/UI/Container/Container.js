import React from 'react';

import classes from './Container.module.css';

const Container = (props) => {
  const containerClasses = `${classes.container} ${props.className}`;

  return (
    <div className={containerClasses} onClick={props.onClick}>
      {props.children}
    </div>
  );
};

export default Container;
