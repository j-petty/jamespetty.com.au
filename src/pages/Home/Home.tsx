import React, { useState, useCallback, useMemo, useContext } from 'react';
import gsap from 'gsap';
import ReactGA from 'react-ga';
import dayjs from 'dayjs';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

import ScrollMenu from 'components/ScrollMenu/ScrollMenu';
import ScrollMenuItem from 'components/ScrollMenuItem/ScrollMenuItem';
import Header from 'components/Header/Header';
import Section from 'components/Section/Section';
import ProjectRow from 'components/ProjectRow/ProjectRow';
import TimelineRow from 'components/TimelineRow/TimelineRow';
import TimelineSubRow from 'components/TimelineSubRow/TimelineSubRow';
import Form from 'components/Form/Form';
import FormField from 'components/FormField/FormField';
import Icon from 'components/Icon/Icon';
import Footer from 'components/Footer/Footer';

import { ColourContext } from 'contexts/ColourContext';
import { ContentContext } from 'contexts/ContentContext';

import {
  project02Img,
  project06Img,
  project05Img,
  project04Img,
  project07Img,
  project08Img,

  agdW,
  agdB,
  aphW,
  aphB,
  deloitteDigitalW,
  deloitteDigitalB,
  spinifyW,
  spinifyB,
  madeForMeW,
  madeForMeB
} from 'assets/images';

import {
  reactImg,
  dotNetImg,
  cloudImg,
  devOpsImg,
  downloadImg
} from 'assets/icons';

import { ColourMode } from 'types/enums';

const Home: React.FC = () => {
  const { colourMode } = useContext(ColourContext);
  const { employmentEntries, projectEntries } = useContext(ContentContext);

  const [currentSection, setCurrentSection] = useState<string>('home');

  // Memorise skills to prevent rerenders
  const skills = useMemo(() => [
    'full stack developer',
    'web designer',
    'project lead',
    'technical consultant',
    'entrepreneur',
    'army reservist'
  ], []);

  // Sort employment entries in ascending order by end date
  const sortedEmploymentEntries = useMemo(() => {
    return employmentEntries?.sort((a, b) => {
      if (!a.fields.endDate) {
        return -1;
      }

      if (!b.fields.endDate) {
        return 1;
      }

      if (a.fields.endDate > b.fields.endDate) {
        return -1;
      }

      if (a.fields.endDate < b.fields.endDate) {
        return 1;
      }
      return 0;
    });
  }, [employmentEntries]);

  // Sort projects by their requested order
  const sortedProjectEntries = useMemo(() => {
    return projectEntries?.sort((a, b) => {
      if (a.fields.order < b.fields.order) {
        return -1;
      }
      if (a.fields.order > b.fields.order) {
        return 1;
      }
      return 0;
    });
  }, [employmentEntries]);

  const homeRef = useCallback(node => {
    if (node !== null) {
      // Control Home scroll indicator
      gsap.to(
        '#home',
        {
          scrollTrigger: {
            trigger: '#home',
            start: 'top center',
            onToggle: ({isActive}) => isActive && setCurrentSection('home')
          }
        }
      );
    }
  }, []);

  const projectsRef = useCallback(node => {
    if (node !== null) {
      // Control Projects scroll indicator
      gsap.from(
        node,
        {
          scrollTrigger: {
            trigger: node,
            start: 'top center',
            onToggle: (e) => {
              if (e.isActive) {
                setCurrentSection('projects');
              }
            }
          }
        }
      );
    }
  }, []);

  const workRef = useCallback(node => {
    if (node !== null) {
      // Control Projects scroll indicator
      gsap.from(
        node,
        {
          scrollTrigger: {
            trigger: node,
            start: 'top center',
            onToggle: (e) => {
              if (e.isActive) {
                setCurrentSection('work');
              }
            }
          }
        }
      );
    }
  }, []);

  const contactRef = useCallback(node => {
    if (node !== null) {
      // Control Contact scroll indicator
      gsap.from(
        node,
        {
          scrollTrigger: {
            trigger: node,
            start: 'top center',
            onToggle: (e) => {
              if (e.isActive) {
                setCurrentSection('contact');
              }
            }
          }
        }
      );
    }
  }, []);

  return (
    <main>
      <ScrollMenu>
        <ScrollMenuItem link='home' inView={currentSection === 'home'} />
        <ScrollMenuItem link='projects' inView={currentSection === 'projects'} />
        <ScrollMenuItem link='work' inView={currentSection === 'work'} />
        <ScrollMenuItem link='contact' inView={currentSection === 'contact'} />
      </ScrollMenu>

      {/* HOME */}
      <Header
        ref={homeRef}
        skillsArray={skills}
        stackArray={[
          {
            icon: reactImg,
            text: 'React.JS',
            link: '//reactjs.org/'
          },
          {
            icon: dotNetImg,
            text: '.Net',
            link: '//dotnet.microsoft.com/learn/aspnet/what-is-aspnet-core'
          },
          {
            icon: cloudImg,
            text: 'Cloud First',
            link: '//azure.microsoft.com/en-au/'
          },
          {
            icon: devOpsImg,
            text: 'CI/CD',
            link: '//azure.microsoft.com/en-au/services/devops/'
          }
        ]} />

      {/* PROJECTS */}
      <Section
        id='projects'
        title='projects'
        subTitle={<>Because it&apos;s not work when you love it.</>}
        ref={projectsRef}>
        <>
          {sortedProjectEntries && sortedProjectEntries?.map(project => (
            <div key={project.sys.id} className='animate'>
              <ProjectRow
                title={project.fields.name}
                skills={project.fields.skills}
                description={project.fields.description && documentToHtmlString(project.fields.description)}
                image={project.fields.image?.fields.file.url}
                imageAlt={project.fields.image?.fields.title}
                linkText={project.fields.linkText}
                link={project.fields.link} />
            </div>
          ))}
        </>

        <p className='para--light' style={{marginTop: '60px'}}>Want to know more? <a href='#contact' className='simpleLink'>Just ask</a>.</p>
      </Section>

      {/* WORK */}
      <Section
        id='work'
        title='work'
        subTitle='Each project brings with it a new set of challenges and opportunities for growth.'
        ref={workRef}>
        <>
          {sortedEmploymentEntries?.map(employment => (
            <div key={employment.sys.id} className='animate'>
              <TimelineRow
                id={employment.fields.slug}
                date={`${!employment.fields.endDate ? 'today' : dayjs(employment.fields.endDate).year()}`}
                image={colourMode === ColourMode.Dark
                  ? employment.fields.logoLight?.fields.file.url
                  : employment.fields.logoDark?.fields.file.url}
                imageAlt={employment.fields.company}
                imageLink={employment.fields.link}
                title={employment.fields.jobTitle}
                duration={!employment.fields.endDate ? 'current' : dayjs(employment.fields.startDate).from(employment.fields.endDate, true)}
                skills={employment.fields.skills}
                description={employment.fields.description && documentToHtmlString(employment.fields.description)}>
                {employment.fields.projects && employment.fields.projects.map(project => (
                  <TimelineSubRow
                    key={project.sys.id}
                    id='work-dps-report-builder'
                    title={project.fields.name}
                    skills={project.fields.skills}
                    description={project.fields.description && documentToHtmlString(project.fields.description)} />
                ))}
              </TimelineRow>
            </div>
          ))}
        </>

        <div className='animate'>
          <TimelineRow
            date='2015' />
        </div>
      </Section>

      {/* CONTACT */}
      <Section
        id='contact'
        title='contact'
        subTitle='Reach out with any questions! I typically respond within 2 business days.'
        ref={contactRef}>
        <div className='animate'>
          <Form action='contact.php'>
            <FormField
              name='name'
              label='name'
              type='text'
              pattern={/[^a-zA-Z" "'-]/}
              maxLength={30}
              isRequired />

            <FormField
              name='email'
              label='email'
              type='email'
              maxLength={255}
              isRequired />

            <FormField
              name='message'
              label='message'
              type='textarea'
              pattern={/[^a-zA-Z0-9.,?'!\s()-]/}
              maxLength={255}
              isRequired />

            <FormField
              name='submit'
              type='submit' />
          </Form>
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

export default Home;
