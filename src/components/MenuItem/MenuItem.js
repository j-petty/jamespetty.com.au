import React from 'react';
import PropTypes from 'prop-types';

import './MenuItem.css';

class MenuItem extends React.Component {
  render () {
    const { label, link } = this.props;
    return (
      <li className="menuItem">
        <a href={link}>{label}</a>
      </li>
    );
  }
}

MenuItem.propTypes = {
  label: PropTypes.string,
  link: PropTypes.string
};

export default MenuItem;
