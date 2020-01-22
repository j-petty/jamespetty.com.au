import React from 'react';
import PropTypes from 'prop-types';

import styles from './Section.module.css';

class Section extends React.Component {
  render () {
    const { id, title } = this.props;

    return (
      <section id={id}>
        {title &&
          <h2 className={styles.sectionTitle}>{title}</h2>
        }

        {this.props.children}
      </section>
    );
  }
}

Section.propTypes = {
  children: PropTypes.array,
  id: PropTypes.string,
  title: PropTypes.string
};

export default Section;
