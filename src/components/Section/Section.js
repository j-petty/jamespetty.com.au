import React from 'react';
import PropTypes from 'prop-types';

import styles from './Section.module.css';

class Section extends React.Component {
  render () {
    const { id, title, subTitle } = this.props;

    return (
      <section id={id}>
        {title &&
          <div className={`${styles.sectionTitle} textCenter`}>
            <h2>{title}</h2>

            {subTitle &&
              <p >{subTitle}</p>
            }
          </div>
        }

        {this.props.children}
      </section>
    );
  }
}

Section.propTypes = {
  children: PropTypes.array,
  id: PropTypes.string,
  title: PropTypes.string,
  subTitle: PropTypes.string
};

export default Section;
