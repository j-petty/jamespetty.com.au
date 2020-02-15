import React from 'react';
import PropTypes from 'prop-types';

import styles from './TimelineRow.module.css';

class TimelineRow extends React.Component {
  render () {
    const { date, description, skills, image, imageAlt, imageLink, children } = this.props;

    return (
      <div className={styles.timelineRow}>
        <span className={styles.timelineDate}>{date}</span>

        <div className={styles.timelineContainer}>
          <div className={styles.timelineHead}>
            {image &&
              <h3 className='noMargin'>
                <a href={imageLink} target='_blank' rel='noopener noreferrer'>
                  <img src={image} alt={imageAlt} />
                </a>
              </h3>
            }

            {skills &&
              <ul className={styles.skillList}>
                {skills.map((skill) =>
                  <li key={skill} className='boxListItem'>{skill}</li>
                )}
              </ul>
            }
          </div>

          <div className={styles.timelineText}>
            {description &&
              <p>{description}</p>
            }

            {children &&
              <>
                {children}
              </>
            }
          </div>
        </div>
      </div>
    );
  }
}

TimelineRow.propTypes = {
  date: PropTypes.string,
  description: PropTypes.string,
  skills: PropTypes.array,
  image: PropTypes.string,
  imageAlt: PropTypes.string,
  imageLink: PropTypes.string,
  children: PropTypes.array
};

export default TimelineRow;
