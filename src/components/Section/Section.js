import React from 'react';
import PropTypes from 'prop-types';

import './Section.module.css';

// NOTE: needs to be a React.Component to support Observer
class Section extends React.Component {
  render () {
    const { id, title } = this.props;

    return (
      <section id={id}>
        {title &&
          <h2>{title}</h2>
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
