import React from 'react';
import PropTypes from 'prop-types';

import styles from './TimelineSubRow.module.css';

function TimelineSubRow (props) {
  const { title, subTitle, description, skills } = props;

  return (
    <div className={styles.timelineSubRow}>
      <div className={styles.head}>
        {title &&
          <h4>{title}</h4>
        }

        {subTitle &&
          <h5>{subTitle}</h5>
        }
      </div>

      {skills &&
        <ul className={styles.skillList}>
          {skills.map((skill) =>
            <li key={skill} className='boxListItem'>{skill}</li>
          )}
        </ul>
      }

      {description &&
        <p>{description}</p>
      }
    </div>
  );
}

TimelineSubRow.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  description: PropTypes.string,
  skills: PropTypes.array
};

export default TimelineSubRow;
