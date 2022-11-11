import React, { useMemo } from 'react';
import ReactGA from 'react-ga';

import Section from 'components/Section/Section';
import Icon from 'components/Icon/Icon';
import Footer from 'components/Footer/Footer';
import SkillList from 'components/SkillList/SkillList';
import BackButton from 'components/BackButton/BackButton';

import {
  downloadImg
} from 'assets/icons';

import styles from './ProjectDetails.module.scss';

const ProjectDetails: React.FC = () => {
  // Memorise skills to prevent rerenders
  const skills = useMemo(() => [
    'full stack developer',
    'web designer',
    'project lead',
    'technical consultant',
    'entrepreneur',
    'army reservist'
  ], []);

  return (
    <main>
      <BackButton
        className={styles.backButton}
        link='/#work'
        label='back to home' />

      <Section
        id='projects'
        title='project name'
        subTitle='Department of X'>

        <SkillList
          items={skills}
          className={styles.skillsList} />

        <div className={styles.detailsContainer}>
          <div className={`${styles.description} ${styles.detailsColumn} animate`}>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
          </div>

          <div className={styles.detailsColumn}>
            <div className={`${styles.projectMetric} animate`}>
              <h3>Challenges</h3>
              <ul className={styles.responsibilitiesList}>
                <li>Challenge 1 is simply dummy text of the printing and typesetting industry. </li>
                <li>Challenge 2 is simply dummy text of the printing and typesetting industry. </li>
                <li>Challenge 3 is simply dummy text of the printing and typesetting industry. </li>
              </ul>
            </div>

            <div className={`${styles.projectMetric} animate`}>
              <h3>Approach</h3>
              <ul className={styles.responsibilitiesList}>
                <li>Approach 1</li>
                <li>Approach 2</li>
                <li>Approach 3</li>
              </ul>
            </div>

            <div className={`${styles.projectMetric} animate`}>
              <h3>Lessons</h3>
              <ul className={styles.responsibilitiesList}>
                <li>Lesson 1</li>
                <li>Lesson 2</li>
                <li>Lesson 3</li>
              </ul>
            </div>

            <div className={`${styles.projectMetric} animate`}>
              <h3>Outcomes</h3>
              <ul className={styles.responsibilitiesList}>
                <li>Outcomes 1</li>
                <li>Outcomes 2</li>
                <li>Outcomes 3</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* FOOTER */}
      <Footer
        link='/'
        name='James Petty' />

      <Icon
        link='/downloads/james-petty-cv-2021.pdf'
        image={downloadImg}
        imageAlt='Download'
        style={{
          position: 'fixed',
          bottom: '40px',
          right: '40px',
          margin: '0'
        }}
        title='Download CV'
        onClick={() => {
          // Trigger analytics event for CV download
          ReactGA.event({
            category: 'Download',
            action: 'CV Downloaded'
          });
        }} />
    </main>
  );
};

export default ProjectDetails;
