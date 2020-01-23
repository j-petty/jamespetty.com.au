import React from 'react';
import PropTypes from 'prop-types';

import styles from './TimelineRow.module.css';

class TimelineRow extends React.Component {
  render () {
    const { date, title, description } = this.props;

    return (
      <div className={styles.timelineRow}>
        <span className={styles.timelineDate}>{date}</span>

        <div className={styles.timelineText}>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}

TimelineRow.propTypes = {
  date: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string
};

export default TimelineRow;
