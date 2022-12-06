import SkillList from 'components/SkillList/SkillList';
import React, { ReactElement } from 'react';

import styles from './TimelineRow.module.scss';


interface ITimelineRowProps {
  id?: string;
  date: string;
  title?: string;
  duration?: string;
  description?: string | ReactElement;
  skills?: Array<string>;
  image?: string;
  imageAlt?: string;
  imageLink?: string;
}

const TimelineRow: React.FC<ITimelineRowProps> = ({
  id,
  date,
  title,
  duration,
  description,
  skills,
  image,
  imageAlt,
  imageLink,
  children
}) => {
  return (
    <div className={styles.timelineRow}>
      <span className={styles.timelineDate}>{date}</span>

      <div className={styles.timelineContainer}>
        <div className={styles.timelineHead}>
          {image &&
            <h3 id={id} className='noMargin'>
              {imageLink
                ?
                <a href={imageLink} target='_blank' rel='noopener noreferrer'>
                  <img src={image} alt={imageAlt} />
                </a>
                : <img src={image} alt={imageAlt} />
              }
            </h3>
          }

          {title &&
            <div className={styles.timelineTitle}>{title}</div>
          }

          {duration &&
            <div className={styles.timelineSubTitle}>{duration}</div>
          }

          {skills &&
            <SkillList
              items={skills}
              className={styles.skillList} />
          }
        </div>

        <div className={styles.timelineText}>
          {description &&
            <>
              {typeof description === 'string'
                ? <div dangerouslySetInnerHTML={{ __html: description}} />
                : <p>{description}</p>
              }
            </>
          }

          {children &&
            children
          }
        </div>
      </div>
    </div>
  );
};

export default TimelineRow;
