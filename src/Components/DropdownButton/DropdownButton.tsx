import React from 'react';
import classNames from 'classnames';

type Props = {
  isSelected: boolean,
  setOpen: (param: any) => void,
  value: string,
};

export const DropdownButton: React.FC<Props> = ({ isSelected, setOpen, value }) => (
  <button
    type="button"
    className={classNames(
      'dropdown__button',
      {
        'dropdown__button--selected': isSelected,
      },
    )}
    onClick={() => setOpen((prevOpen: boolean) => !prevOpen)}
  >
    {value}
  </button>
);
