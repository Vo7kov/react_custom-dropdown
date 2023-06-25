/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import React, { Component } from 'react';
import classNames from 'classnames';

import './Dropdown.scss';

type Props = {
  options: string[],
};

type State = {
  unSelected: boolean,
  isOpened: boolean,
  dropDownValue: string,
};

export class Dropdown extends Component<Props, State> {
  state: Readonly<State> = {
    unSelected: true,
    isOpened: false,
    dropDownValue: 'Select size',
  };

  render(): React.ReactNode {
    const { unSelected, isOpened, dropDownValue } = this.state;
    const { options } = this.props;

    return (
      <div className="dropdown">
        <button
          type="button"
          className={
            classNames(
              'dropdown__button',
              {
                'dropdown__button--unSelected': unSelected,
              },
            )
          }
          onClick={() => {
            this.setState(state => ({
              isOpened: !state.isOpened,
            }));
          }}
        >
          {dropDownValue}
        </button>

        {isOpened && (
          <ul
            className="dropdown__list"
          >
            {options.map((option: string) => (
              <li
                key={option}
                className="dropdown__list-item"
                onClick={(event) => {
                  this.setState({
                    isOpened: false,
                    unSelected: false,
                    dropDownValue: event.currentTarget.innerText,
                  });
                }}
              >
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}
