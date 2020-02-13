/* global document */

import React from 'react';
import PropTypes from 'prop-types';

import styles from './TimelineRow.module.css';

class TimelineRow extends React.Component {
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
    const { date, description, skills, image, imageAlt, imageLink, children } = this.props;

    return (
      <div className={styles.timelineRow}>
        <span className={styles.timelineDate}>{date}</span>

        <div className={styles.timelineText}>
          {image &&
            <h3 className='noMargin'>
              <a className={styles.timelineLogo} href={imageLink} target='_blank' rel='noopener noreferrer'>
                <img src={image} alt={imageAlt} />
              </a>
            </h3>
          }

          {skills &&
            <ul className={styles.skillList}>
              {skills.map((skill) =>
                <li key={skill} className='boxListItem'>{skill}</li>
              )}
            </ul>
          }

          {description &&
            <p>{description}</p>
          }

          {children &&
            <>
              <button
                className={isToggled ? `buttonLink ${styles.contentToggle} toggled` : `buttonLink ${styles.contentToggle}`} 
                onClick={this.handleToggle}>
                {isToggled ? 'hide projects' : 'see projects'}
              </button>

              <div className={isToggled ? `${styles.accordion} open` : styles.accordion}>
                {children}
              </div>
            </>
          }
        </div>
      </div>
    );
  }
}

TimelineRow.propTypes = {
  date: PropTypes.string,
  description: PropTypes.string,
  skills: PropTypes.array,
  image: PropTypes.string,
  imageAlt: PropTypes.string,
  imageLink: PropTypes.string,
  children: PropTypes.array
};

export default TimelineRow;
