/**
 *
 * FiltersGroup
 *
 */

import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import PropTypes from 'prop-types';
import Radio from '../Radio';


function FiltersGroup({
  title,
  name,
  options,
  value,
  onChange,
  tipo
}) {

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(prevState => !prevState);
  const optLen = options.length;

  return (
    <div>
      {(tipo == 'radio') ?
      <>
      <p>{title}</p>
      <ul>
        {options.map(option => {
          return (
            <li key={option.name || option}>
              <Radio
                onChange={onChange}
                name={name}
                message={option.name || option}
                value={option.id || option}
                checked={value === option.id || value === option}
              />
            </li>
          );
        })}
      </ul></>:
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>{ title }</DropdownToggle>
        <DropdownMenu>
            {options.map((option, i) => {
                return (
                <>
                <Radio
                    onChange={onChange}
                    name={name}
                    message={option.name || option}
                    value={option.id || option}
                    checked={value === option.id || value === option}
                  />
                {(optLen === i + 1) ? '' : <DropdownItem divider />}
                </>
                );
            })}
        </DropdownMenu>
    </Dropdown>
    }
    </div>
  );
}

FiltersGroup.defaultProps = {
  title: '',
  name: '',
  onChange: () => {},
  options: [],
  value: null,
  tipo: 'radio'
};

FiltersGroup.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.array,
  value: PropTypes.string,
  tipo: PropTypes.string
};

export default FiltersGroup;
