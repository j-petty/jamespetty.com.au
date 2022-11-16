import React, { useMemo, useContext } from 'react';
import ReactGA from 'react-ga';
import { BsDownload } from 'react-icons/bs';
import { useParams, Redirect } from 'react-router-dom';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

import Section from 'components/Section/Section';
import Icon from 'components/Icon/Icon';
import Footer from 'components/Footer/Footer';
import SkillList from 'components/SkillList/SkillList';
import BackButton from 'components/BackButton/BackButton';
import Loader from 'components/Loader/Loader';

import { ContentContext } from 'contexts/ContentContext';

import styles from './ProjectDetails.module.scss';

interface IProjectDetailsParams {
  employmentId: string;
  projectId: string;
}

const ProjectDetails: React.FC = () => {
  const { employmentId, projectId } = useParams<IProjectDetailsParams>();

  const {
    employmentEntries,
    isEmploymentError
  } = useContext(ContentContext);

  // Find selected employment record
  const currentEmployment = useMemo(() => employmentEntries?.find(employment => employment.sys.id === employmentId), [employmentEntries]);

  // Find selected employment project record
  const currentProject = useMemo(() => currentEmployment?.fields?.projects?.find(project => project.sys.id === projectId), [currentEmployment]);

  if (isEmploymentError) {
    return (
      <Redirect to='/#work' />
    );
  }

  if (!currentEmployment || !currentProject) {
    return (
      <div className='loaderContainer'>
        <Loader />
      </div>
    );
  }

  return (
    <main>
      <BackButton
        className={styles.backButton}
        link='/#work'
        label='back to home' />

      <Section
        id='projects'
        title={currentProject.fields.name}
        subTitle={currentEmployment.fields.company}>
        <>
          {currentProject.fields.skills &&
            <SkillList
              items={currentProject.fields.skills}
              className={styles.skillsList} />
          }

          <div className={styles.detailsContainer}>
            <div className={`${styles.description} ${styles.detailsColumn} animate`}>
              {currentProject.fields.shortDescription &&
                <div dangerouslySetInnerHTML={{ __html: documentToHtmlString(currentProject.fields.shortDescription)}} />
              }
              {currentProject.fields.description &&
                <div dangerouslySetInnerHTML={{ __html: documentToHtmlString(currentProject.fields.description)}} />
              }
            </div>

            <div className={styles.detailsColumn}>
              <div className={`${styles.projectMetric} animate`}>
                <h3>Challenges</h3>
                <div
                  className={styles.responsibilitiesList}
                  dangerouslySetInnerHTML={{ __html: documentToHtmlString(currentProject.fields.challenges)}} />
              </div>

              <div className={`${styles.projectMetric} animate`}>
                <h3>Approach</h3>
                <div
                  className={styles.responsibilitiesList}
                  dangerouslySetInnerHTML={{ __html: documentToHtmlString(currentProject.fields.approach)}} />
              </div>

              <div className={`${styles.projectMetric} animate`}>
                <h3>Lessons</h3>
                <div
                  className={styles.responsibilitiesList}
                  dangerouslySetInnerHTML={{ __html: documentToHtmlString(currentProject.fields.lessons)}} />
              </div>

              <div className={`${styles.projectMetric} animate`}>
                <h3>Outcomes</h3>
                <div
                  className={styles.responsibilitiesList}
                  dangerouslySetInnerHTML={{ __html: documentToHtmlString(currentProject.fields.outcomes)}} />
                <ul className={styles.responsibilitiesList}>
                  <li>Outcomes 1</li>
                  <li>Outcomes 2</li>
                  <li>Outcomes 3</li>
                </ul>
              </div>
            </div>
          </div>
        </>
      </Section>

      {/* FOOTER */}
      <Footer />

      <Icon
        link='/downloads/james-petty-cv-2021.pdf'
        image={<BsDownload />}
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
