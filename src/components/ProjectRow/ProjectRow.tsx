import React from 'react';
import { BsLink45Deg, BsCodeSlash } from 'react-icons/bs';

import SkillList from 'components/SkillList/SkillList';

import styles from './ProjectRow.module.scss';

interface IProjectRowProps {
  title: string;
  description: string;
  linkText?: string;
  link?: string;
  sourceLink?: string;
  skills?: Array<string>;
  image?: string;
  imageAlt?: string;
}

const ProjectRow: React.FC<IProjectRowProps> = ({ title, description, linkText, link, sourceLink, skills, image, imageAlt }) => {
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
          <div dangerouslySetInnerHTML={{__html: description}} />
        }

        {link &&
          <a
            href={link}
            className='simpleLink'
            target='_blank'
            rel='noopener noreferrer'>
            <span>{linkText ? linkText : 'see more'}</span>
            <BsLink45Deg />
          </a>
        }

        {sourceLink &&
          <a
            href={sourceLink}
            className='simpleLink'
            target='_blank'
            rel='noopener noreferrer'>
            <span>see the code</span>
            <BsCodeSlash />
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
