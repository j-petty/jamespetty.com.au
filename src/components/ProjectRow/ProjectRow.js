import React from 'react';
import PropTypes from 'prop-types';

import styles from './ProjectRow.module.css';

function ProjectRow (props) {
  const { index, title, description, themes, image, pageUrl } = props;

  const number = ('0' + index).slice(-2) + '.';

  return (
    <a className={styles.projectRow} href={pageUrl}>
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

      {/* NOTE: using span here, not image so that CSS background-image
      property can be used to maintain aspect ratio */}
      {image &&
        <span
          className={styles.projectImage}
          style={{backgroundImage: `url(${image})`}} />
      }
    </a>
  );
}

ProjectRow.propTypes = {
  index: PropTypes.number,
  title: PropTypes.string,
  description: PropTypes.string,
  themes: PropTypes.array,
  image: PropTypes.string,
  pageUrl: PropTypes.string
};

export default ProjectRow;
