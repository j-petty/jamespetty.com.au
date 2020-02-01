import React from 'react';
import PropTypes from 'prop-types';

import styles from './ProjectRow.module.css';

function ProjectRow (props) {
  const { index, title, description, themes, image, imageAlt } = props;

  const number = ('0' + index).slice(-2) + '.';

  return (
    <button className={styles.projectRow}>
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
      </div>

      {image &&
        <img
          className={styles.projectImage}
          src={image}
          alt={imageAlt} />
      }
    </button>
  );
}

ProjectRow.propTypes = {
  index: PropTypes.number,
  title: PropTypes.string,
  description: PropTypes.string,
  themes: PropTypes.array,
  image: PropTypes.string,
  imageAlt: PropTypes.string
};

export default ProjectRow;
