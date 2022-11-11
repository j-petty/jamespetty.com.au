import React from 'react';

import SkillList from 'components/SkillList/SkillList';

import styles from './ProjectRow.module.scss';

interface IProjectRowProps {
  title: string;
  description: string;
  linkText?: string;
  link?: string;
  skills: Array<string>;
  image: string;
  imageAlt: string;
}

const ProjectRow: React.FC<IProjectRowProps> = ({ title, description, linkText, link, skills, image, imageAlt }) => {
  return (
    <div
      className={styles.projectRow}
      aria-label={title}>
      <div className={styles.projectContainer}>
        <div className={styles.titleRow}>
          <h3>{title}</h3>

          {skills &&
            <SkillList
              items={skills}
              className={styles.skillList} />
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
            {linkText ? linkText : 'see more'}
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
};

export default ProjectRow;
