import React from 'react';
import PropTypes from 'prop-types';

import styles from './TimelineRow.module.css';

function TimelineRow (props) {
  const { date, title, description, image, imageAlt, imageLink, link } = props;

  return (
    <div className={styles.timelineRow}>
      <span className={styles.timelineDate}>{date}</span>

      {description &&
        <div className={styles.timelineText}>
          {title &&
            <h3>{title}</h3>
          }

          {image &&
            <a className={styles.timelineLogo} href={imageLink} target='_blank' rel='noopener noreferrer'>
              <img src={image} alt={imageAlt} />
            </a>
          }

          <p>{description}</p>

          {link &&
            <a href={link} className='simpleLink'>see more</a>
          }
        </div>
      }
    </div>
  );
}

TimelineRow.propTypes = {
  date: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  imageAlt: PropTypes.string,
  imageLink: PropTypes.string,
  link: PropTypes.string
};

export default TimelineRow;
