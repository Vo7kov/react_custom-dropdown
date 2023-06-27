/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import React from 'react';

type Props = {
  options: string[],
  setOpen: (param: any) => void,
  setSelected: (param: any) => void,
  setValue: (param: any) => void,
};

export const DropdownList: React.FC<Props> = ({
  options,
  setOpen,
  setSelected,
  setValue,
}) => (
  <ul
    className="dropdown__list"
  >
    {options.map((option: string) => (
      <li
        key={option}
        className="dropdown__list-item"
        onClick={() => {
          setOpen(false);
          setSelected(true);
          setValue(option);
        }}
      >
        {option}
      </li>
    ))}
  </ul>
);
