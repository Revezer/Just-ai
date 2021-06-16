import React from 'react';
import loading from '../../img/sample.gif'

const LoadingScreen = () => {
  return (
    <div>
      <p>Loading ...</p>
      <img src={loading}></img>
    </div>
  );
};

export default LoadingScreen;
