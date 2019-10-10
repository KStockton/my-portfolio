import React from 'react';
import sadface from '../../assets/sadface.svg';

const NotFound = () => {

  return (
    <div id='not-found'>
      <img src={sadface} alt='sadface'/>
      <h1>Sorry Page Not Found</h1>
    </div>
  );
};

export default NotFound;