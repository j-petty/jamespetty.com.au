import React from 'react';
import PropTypes from 'prop-types';

import styles from './ProjectRow.module.css';

class ProjectRow extends React.Component {
  render () {
    const { title, description, linkText, link, skills, image, imageAlt } = this.props;

    return (
      <div
        className={styles.projectRow}
        aria-label={title}>
        <div className={styles.projectContainer}>
          <div className={styles.titleRow}>
            <h3>{title}</h3>

            {skills &&
              <ul className={styles.skillList}>
                {skills.map((skill) =>
                  <li key={skill} className='boxListItem'>{skill}</li>
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
              {linkText ?? 'see more'}
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
}

ProjectRow.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  linkText: PropTypes.string,
  link: PropTypes.string,
  skills: PropTypes.array,
  image: PropTypes.string,
  imageAlt: PropTypes.string
};

export default ProjectRow;
