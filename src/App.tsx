import React from 'react';
import { Dropdown } from './Components/Dropdown/Dropdown';

import './App.scss';

const options = ['XS', 'S', 'M', 'L', 'XL'];

export const App: React.FC = () => {
  return (
    <div className="App">
      <Dropdown
        options={options}
      />
    </div>
  );
};
