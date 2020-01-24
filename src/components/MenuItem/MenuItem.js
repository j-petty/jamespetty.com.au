import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-scroll';

import styles from './MenuItem.module.css';

class MenuItem extends React.Component {
  render () {
    const { label, link, toggleMenu } = this.props;

    return (
      <li className={styles.menuItem}>
        <Link
          smooth={true}
          to={link}
          onClick={toggleMenu}>
          {label}
        </Link>
      </li>
    );
  }
}

MenuItem.propTypes = {
  label: PropTypes.string,
  link: PropTypes.string,
  toggleMenu: PropTypes.func
};

export default MenuItem;
