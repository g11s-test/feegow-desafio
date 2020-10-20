import React from 'react';

import './styles.css';

const BtnGreen = ({ fn, value }) => {
  return (
    <button className="app-header-btn py-1 px-4" onClick={() => fn()}>
      {value}
    </button>
  );
};

export default BtnGreen;
