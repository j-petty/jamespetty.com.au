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
import { ColourContext } from 'contexts/ColourContext';

import { ColourMode } from 'types/enums';

import styles from './ProjectDetails.module.scss';

interface IProjectDetailsParams {
  employmentId: string;
  projectId: string;
}

const ProjectDetails: React.FC = () => {
  const { employmentId, projectId } = useParams<IProjectDetailsParams>();

  const { colourMode } = useContext(ColourContext);
  const {
    isLoading,
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

  if (isLoading) {
    return (
      <div className='loaderContainer'>
        <Loader />
      </div>
    );
  }

  if (!currentEmployment || !currentProject) {
    return (
      <Redirect to='/404' />
    );
  }

  return (
    <main>
      <BackButton
        className={styles.backButton}
        link='/#work'
        label='back to home' />

      <div className={styles.employmentLogo}>
        <a
          target='_blank'
          rel='noreferrer'
          href={currentEmployment.fields.link}>
          <img
            alt={currentEmployment.fields.company}
            src={colourMode === ColourMode.Dark
              ? currentEmployment.fields.logoLight?.fields.file.url
              : currentEmployment.fields.logoDark?.fields.file.url} />
        </a>
      </div>

      <Section
        id='projects'
        title={currentProject.fields.name}
        className={styles.detailsSection}>
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
              {currentProject.fields.challenges &&
                <div className={`${styles.projectMetric} animate`}>
                  <h3>Challenges</h3>
                  <div
                    className={styles.responsibilitiesList}
                    dangerouslySetInnerHTML={{ __html: documentToHtmlString(currentProject.fields.challenges)}} />
                </div>
              }

              {currentProject.fields.approach &&

                <div className={`${styles.projectMetric} animate`}>
                  <h3>Approach</h3>
                  <div
                    className={styles.responsibilitiesList}
                    dangerouslySetInnerHTML={{ __html: documentToHtmlString(currentProject.fields.approach)}} />
                </div>
              }

              {currentProject.fields.lessons &&
                <div className={`${styles.projectMetric} animate`}>
                  <h3>Lessons</h3>
                  <div
                    className={styles.responsibilitiesList}
                    dangerouslySetInnerHTML={{ __html: documentToHtmlString(currentProject.fields.lessons)}} />
                </div>
              }

              {currentProject.fields.outcomes &&
                <div className={`${styles.projectMetric} animate`}>
                  <h3>Outcomes</h3>
                  <div
                    className={styles.responsibilitiesList}
                    dangerouslySetInnerHTML={{ __html: documentToHtmlString(currentProject.fields.outcomes)}} />
                </div>
              }
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
