import React, { ReactElement, useState } from 'react';

import SkillList from 'components/SkillList/SkillList';

import styles from './TimelineSubRow.module.scss';

interface ITimelineSubRowProps {
  id: string;
  title: string;
  subTitle?: string;
  description: string | ReactElement;
  skills: Array<string>;
  responsibilities?: Array<string>;
}

const TimelineSubRow: React.FC<ITimelineSubRowProps> = ({ id, title, subTitle, description, skills, responsibilities }) => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    // Update state
    setIsToggled(!isToggled);
  };

  return (
    <div className={styles.timelineSubRow}>
      <div className={styles.head}>
        {title &&
          <h4 id={id}>{title}</h4>
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

      {(description || responsibilities) &&
        <>
          <div className={isToggled ? 'accordion open' : 'accordion'}>
            <p>{description}</p>

            {responsibilities &&
              <ul className={styles.responsibilitiesList}>
                {responsibilities.map(responsibility =>
                  <li key={responsibility}>{responsibility}</li>
                )}
              </ul>
            }
          </div>

          <button
            className={isToggled ? `buttonLink ${styles.contentToggle} toggled` : `buttonLink ${styles.contentToggle}`}
            onClick={handleToggle}>
            {isToggled ? 'read less' : 'read more'}
          </button>
        </>
      }
    </div>
  );
};

export default TimelineSubRow;
