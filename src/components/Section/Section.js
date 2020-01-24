import React from 'react';
import PropTypes from 'prop-types';

import styles from './Section.module.css';

class Section extends React.Component {
  render () {
    const { id, title } = this.props;

    return (
      <section id={id}>
        {title &&
          <div className={`${styles.sectionTitle} textCenter`}>
            <h2>{title}</h2>
          </div>
        }

        {this.props.children}
      </section>
    );
  }
}

Section.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object
  ]),
  id: PropTypes.string,
  title: PropTypes.string
};

export default Section;
