import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';

import SkillList from 'components/SkillList/SkillList';

import styles from './TimelineSubRow.module.scss';

interface ITimelineSubRowProps {
  employmentId: string;
  projectId: string;
  slug: string;
  title: string;
  subTitle?: string;
  description: string | ReactElement;
  skills?: Array<string>;
}

const TimelineSubRow: React.FC<ITimelineSubRowProps> = ({ employmentId, projectId, slug, title, subTitle, description, skills }) => {
  return (
    <div className={styles.timelineSubRow}>
      <div className={styles.head}>
        {title &&
          <Link
            to={`/work/${employmentId}/project/${projectId}`}>
            <h4 id={slug}>{title}</h4>
          </Link>
        }

        {subTitle &&
          <h5>{subTitle}</h5>
        }
      </div>

      {skills &&
        <SkillList
          items={skills}
          className={styles.skillList} />
      }

      {description &&
        <>
          <div className={styles.description}>
            {description &&
              <>
                {typeof description === 'string'
                  ? <div dangerouslySetInnerHTML={{ __html: description}} />
                  : <p>{description}</p>
                }
              </>
            }
          </div>

          <Link
            className={styles.projectLink}
            to={`/work/${employmentId}/project/${projectId}`}>
            See project details
            <BsArrowRight />
          </Link>
        </>
      }
    </div>
  );
};

export default TimelineSubRow;
