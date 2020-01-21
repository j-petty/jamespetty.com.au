import React from 'react';
import PropTypes from 'prop-types';

import './MenuItem.css';

class MenuItem extends React.Component {
  render () {
    const { label, link, additionalClass } = this.props;
    return (
      <li className={'menuItem ' + additionalClass}>
        <a href={link}>{label}</a>
      </li>
    );
  }
}

MenuItem.propTypes = {
  label: PropTypes.string,
  link: PropTypes.string,
  additionalClass: PropTypes.string
};

export default MenuItem;
