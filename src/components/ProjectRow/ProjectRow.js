import React from 'react';
import PropTypes from 'prop-types';

import styles from './ProjectRow.module.css';

class ProjectRow extends React.Component {
  render () {
    const { title, description, image, pageUrl } = this.props;

    return (
      <a className={styles.projectContainer} href={pageUrl}>
        <h3 className={styles.projectTitle}>{title}</h3>

        <p className={styles.projectDescription}>{description}</p>

        {image &&
          <img className={styles.projectImage} src={image} />
        }
      </a>
    );
  }
}

ProjectRow.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  pageUrl: PropTypes.string
};

export default ProjectRow;
