import React from 'react';
import PropTypes from 'prop-types';

import styles from './ProjectRow.module.css';

function ProjectRow (props) {
  const { index, title, description, link, themes, image, imageAlt } = props;

  const number = ('0' + index).slice(-2) + '.';

  return (
    <div
      className={styles.projectRow}
      aria-label={title}>
      <div className={styles.projectContainer}>
        <div className={styles.counter}>{number}</div>

        <div className={styles.titleRow}>
          <h3>{title}</h3>

          {themes &&
            <ul className={styles.themeList}>
              {themes.map((theme) =>
                <li key={theme}>{theme}</li>
              )}
            </ul>
          }
        </div>

        {description &&
          <p>{description}</p>
        }

        {link &&
          <a
            href={link}
            className='simpleLink'
            target='_blank'
            rel='noopener noreferrer'>
            see more
          </a>
        }
      </div>

      {image &&
        <img
          className={styles.projectImage}
          src={image}
          alt={imageAlt} />
      }
    </div>
  );
}

ProjectRow.propTypes = {
  index: PropTypes.number,
  title: PropTypes.string,
  description: PropTypes.string,
  link: PropTypes.string,
  themes: PropTypes.array,
  image: PropTypes.string,
  imageAlt: PropTypes.string
};

export default ProjectRow;
