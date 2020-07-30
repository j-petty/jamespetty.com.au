/* global document */

import React from 'react';
import PropTypes from 'prop-types';

import styles from './TimelineSubRow.module.css';


class  TimelineSubRow extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      isToggled: false
    };

    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle () {
    this.setState({
      isToggled: !this.state.isToggled
    });

    // remove focus from button
    document.activeElement.blur();
  }

  render () {
    const { isToggled } = this.state;
    const { id, title, subTitle, description, skills } = this.props;

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
          <ul className={styles.skillList}>
            {skills.map((skill) =>
              <li key={skill} className='boxListItem'>{skill}</li>
            )}
          </ul>
        }

        {description &&
          <>
            <div className={isToggled ? 'accordion open' : 'accordion'}>
              <p >{description}</p>
            </div>

            <button
              className={isToggled ? `buttonLink ${styles.contentToggle} toggled` : `buttonLink ${styles.contentToggle}`}
              onClick={this.handleToggle}>
              {isToggled ? 'read less' : 'read more'}
            </button>
          </>
        }
      </div>
    );
  }
}

TimelineSubRow.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  subTitle: PropTypes.string,
  description: PropTypes.string,
  skills: PropTypes.array
};

export default TimelineSubRow;
