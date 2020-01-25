import React from 'react';
import PropTypes from 'prop-types';

import styles from './ProjectRow.module.css';

function ProjectRow (props) {
  const { index, title, themes, image, imageAlt, pageUrl } = props;

  const number = ('0' + index).slice(-2) + '.';

  return (
    <a className={styles.projectContainer} href={pageUrl}>
      <div>{number}</div>

      <h3>{title}</h3>

      {themes &&
        <ul className={styles.themeList}>
          {themes.map((theme) =>
            <li key={theme}>{theme}</li>
          )}
        </ul>
      }

      {image &&
        <img className={styles.projectImage} src={image} alt={imageAlt} />
      }
    </a>
  );
}

ProjectRow.propTypes = {
  index: PropTypes.number,
  title: PropTypes.string,
  themes: PropTypes.array,
  image: PropTypes.string,
  imageAlt: PropTypes.string,
  pageUrl: PropTypes.string
};

export default ProjectRow;
