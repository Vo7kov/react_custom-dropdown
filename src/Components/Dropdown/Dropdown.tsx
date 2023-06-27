import React, { useState } from 'react';

import { DropdownButton } from '../DropdownButton/DropdownButton';
import { DropdownList } from '../DropdownList/DropdownList';

import './Dropdown.scss';

type Props = {
  options: string[],
};

export const Dropdown: React.FC<Props> = ({ options }) => {
  const [isSelected, setSelected] = useState(false);
  const [isOpened, setOpen] = useState(false);
  const [dropdownValue, setValue] = useState('Select size');

  return (
    <div className="dropdown">
      <DropdownButton
        isSelected={isSelected}
        setOpen={setOpen}
        value={dropdownValue}
      />

      {isOpened && (
        <DropdownList
          options={options}
          setOpen={setOpen}
          setSelected={setSelected}
          setValue={setValue}
        />
      )}
    </div>
  );
};
