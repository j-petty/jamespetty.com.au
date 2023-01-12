import React, { useState, useCallback, useMemo, useContext } from 'react';
import gsap from 'gsap';
import ReactGA from 'react-ga';
import dayjs from 'dayjs';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { BsFillCloudCheckFill, BsDownload } from 'react-icons/bs';
import { SiAzuredevops, SiReact, SiDotnet } from 'react-icons/si';

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

import { ColourMode } from 'types/enums';

const Home: React.FC = () => {
  const { colourMode } = useContext(ColourContext);
  const {
    employmentEntries, projectEntries,
    isEmploymentError, isProjectsError
  } = useContext(ContentContext);

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
  }, [isProjectsError]);

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
  }, [isEmploymentError]);

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
            icon: <SiReact />,
            text: 'React.JS',
            link: 'https://reactjs.org/'
          },
          {
            icon: <SiDotnet />,
            text: '.Net',
            link: 'https://dotnet.microsoft.com/learn/aspnet/what-is-aspnet-core'
          },
          {
            icon: <BsFillCloudCheckFill />,
            text: 'Cloud First',
            link: 'https://azure.microsoft.com/en-au/'
          },
          {
            icon: <SiAzuredevops />,
            text: 'CI/CD',
            link: 'https://azure.microsoft.com/en-au/services/devops/'
          }
        ]} />

      {/* PROJECTS */}
      <Section
        id='projects'
        title='projects'
        subTitle={<>Everyone needs a side hustle - because it&apos;s not work when you love it.</>}
        ref={projectsRef}>
        {isProjectsError
          ? <p className='para--error'>Whoops! You shouldn&apos;t be seeing this, please reach out using the <a href='/#contact'>contact form</a> below and I&apos;ll get the projects list working again.</p>
          : <>
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
                    link={project.fields.link}
                    sourceLink={project.fields.sourceLink} />
                </div>
              ))}
            </>

            <p className='para--light' style={{marginTop: '60px'}}>Want to know more? <a href='#contact' className='simpleLink'>Just ask</a>.</p>
          </>
        }
      </Section>

      {/* WORK */}
      <Section
        id='work'
        title='work'
        subTitle='Each project brings with it a new set of challenges and opportunities for growth.'
        ref={workRef}>
        {isEmploymentError
          ? <p className='para--error'>Whoops! You shouldn&apos;t be seeing this, please reach out using the <a href='/#contact'>contact form</a> below and I&apos;ll get employment history working again.</p>
          : <>
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
                        employmentId={employment.sys.id}
                        projectId={project.sys.id}
                        slug={project.fields.slug}
                        title={project.fields.name}
                        skills={project.fields.skills}
                        description={project.fields.shortDescription && documentToHtmlString(project.fields.shortDescription)} />
                    ))}
                  </TimelineRow>
                </div>
              ))}
            </>

            <div className='animate'>
              <TimelineRow
                date='2015' />
            </div>
          </>
        }
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
      <Footer />

      <Icon
        link='/downloads/james-petty-cv.pdf'
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

export default Home;
