import React, { useState, useCallback, useMemo, useContext } from 'react';
import gsap from 'gsap';
import ReactGA from 'react-ga';

import ScrollMenu from 'components/ScrollMenu/ScrollMenu';
import ScrollMenuItem from 'components/ScrollMenuItem/ScrollMenuItem';
import Header from 'components/Header/Header';
import Section from 'components/Section/Section';
import ProjectRow from 'components/ProjectRow/ProjectRow';
import TimelineRow from 'components/TimelineRow/TimelineRow';
import TimelineSubRow from 'components/TimelineSubRow/TimelineSubRow';
import Form from 'components/Form/Form';
import FormField from 'components/FormField/FormField';
import SocialList from 'components/SocialList/SocialList';
import Icon from 'components/Icon/Icon';
import Footer from 'components/Footer/Footer';

import { ColourContext } from 'contexts/ColourContext';

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
  linkedInImg,
  stackOverflowImg,
  githubImg,

  reactImg,
  dotNetImg,
  cloudImg,
  devOpsImg,
  downloadImg
} from 'assets/icons';

import styles from './Home.module.scss';
import { ColourMode } from 'types/enums';

const Home: React.FC = () => {
  const { colourMode } = useContext(ColourContext);
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
        ref={projectsRef}>
        {/*<div className='animate'>
          <ProjectRow
            title='Web Development Studio'
            skills={['Web Design', 'eCommerce', 'CMS']}
            description='Co-founder of a Canberra based software development studio, whtspc. We specialise in boutique web applications. Check out our latest work and get in touch to learn how we can help your business.'
            image={project01Img}
            imageAlt='whtspc'
            linkText='whtspc.com.au'
            link='//whtspc.com.au/' />
        </div>*/}

        <div className='animate'>
          <ProjectRow
            title='Contract Management System'
            skills={['SaaS', 'Start-up', 'Business']}
            description='My side hustle and passion project, we are building a new contract management tool aimed at improving the contracting experience for everyone involved.'
            image={project08Img}
            imageAlt='Recruithero'
            linkText='recruithero.com.au'
            link='//recruithero.com.au/' />
        </div>

        <div className='animate'>
          <ProjectRow
            title='MyWay Balance'
            skills={['iOS', 'Android', 'Xamarin']}
            description='Born out of frustration from using the dated website to check my public transport card balance. I built an app that lets people check their MyWay card balance right from their phones.'
            image={project02Img}
            imageAlt='MyWay Balance'
            linkText='Join Beta'
            link='//testflight.apple.com/join/bubQRw24' />
        </div>

        <div className='animate'>
          <ProjectRow
            title='Shuffle: Bites'
            skills={['iOS', 'Android', 'Xamarin']}
            description="A fun way of deciding what to eat when you just can't pick. The app chooses a nearby venue for you."
            image={project07Img}
            imageAlt='Shuffle: Bites'
            linkText='Open on App Store'
            link='//apps.apple.com/au/app/shuffle-bites/id1581269954' />
        </div>

        <div className='animate'>
          <ProjectRow
            title='Digital Pass Provider'
            skills={['Asp.Net', 'Azure', 'Apple', 'Google']}
            description='An API first platform which simplifies the process of generating digital Passes for the Apple and Google wallets. Intended to simplify the process of integrating with digital wallet solutions.'
            image={project06Img}
            imageAlt='Simplifying digital wallets.' />
        </div>

        <div className='animate'>
          <ProjectRow
            title='Digital Quiz'
            skills={['React', 'Node.js', 'AWS']}
            description='An online quiz powered by a cloud REST API. Designed to help educate people about Digital Transformation and demystify some common misconceptions.'
            image={project05Img}
            imageAlt='Educating the masses.' />
        </div>

        <div className='animate'>
          <ProjectRow
            title='Beached'
            skills={['.Net', 'MonoGame', 'Game Design']}
            description='A top-down survival game, built using the bare-bones game development toolkit, MonoGame. Featuring a randomly generated island and pesky chickens. Play it now on Steam.'
            image={project04Img}
            imageAlt='Survival RPG.'
            linkText='View on Steam'
            link='//store.steampowered.com/app/652560/Beached/' />
        </div>

        <p className='para--light' style={{marginTop: '60px'}}>Want to know more? <a href='#contact' className='simpleLink'>Just ask</a>.</p>
      </Section>

      {/* WORK */}
      <Section
        id='work'
        title='work'
        ref={workRef}>
        <div className='animate'>
          <TimelineRow
            id='work-dps'
            date='today'
            image={colourMode === ColourMode.Dark
              ? aphW
              : aphB}
            imageAlt='Department of Parliamentary Services'
            imageLink='//www.aph.gov.au/'
            title='Senior Full-stack Developer'
            duration='current'
            skills={['.Net', 'React', 'Azure', 'Agile', 'Public Sector', 'Contractor']}
            description={
              <>
                <p>Each new client presents an array of new challenges to overcome. In the case of DPS, project dependency management has been a crucial part of my role as technical lead.</p>
                <br /><p>The department was undergoing a Cloud migration at the time which meant a lot of changes and lack of established patterns. I worked closely with the migration team and was able to offer advice based on experience working with Cloud on other clients and projects.</p>
              </>
            } >
            <TimelineSubRow
              id='work-dps-report-builder'
              title='Committee Report Builder'
              skills={['Technical Lead', 'React', '.Net', 'Azure']}
              description={
                <>
                  <p>I was tasked as technical lead of an already well in-flight project. Initially I attempted to absorb as much information about the project&apos;s context, before beginning work to improve quality assurance by implementing CI/CD, code linting, PR enforcement and improved work practices.</p>
                  <p>Throughout the project I worked on every aspect of the technical design and delivery and provided guidance to other team members, as well as offering vital input into project planning, resourcing and dependency management.</p>
                </>
              }
              responsibilities={[
                'Represented project as tech lead at board meetings and agile rituals.',
                'Managed project risks and dependencies with PM and stakeholders.',
                'Collaborated with solution architects on system design and implementation approach.',
                'Coordinated development team in delivering a high quality product which meets end user requirements.',
                'Assisted with ongoing BAU support of legacy systems.'
              ]} />
          </TimelineRow>
        </div>

        <div className='animate'>
          <TimelineRow
            id='work-agd'
            date='2022'
            image={colourMode === ColourMode.Dark
              ? agdW
              : agdB}
            imageAlt="Attorney-General's Department"
            imageLink='//www.ag.gov.au/'
            title='Senior Full-stack Developer'
            duration='1 year'
            skills={['.Net', 'React', 'Azure', 'Agile', 'Public Sector', 'Contractor']}
            description={
              <>
                Contracting with the Attorney-General&apos;s Department as a senior full-stack developer and technical lead offered exposure to a suite of new technologies and personal growth opportunities.
                The client&apos;s stringent security posture required creative solutions to some otherwise simplistic technical challenges.
              </>
            } >
            <TimelineSubRow
              id='work-agd-doc'
              title='Secure Document Sharing Platform'
              skills={['Technical Lead', 'React', '.Net', 'Azure']}
              description={<>I was engaged to carry on development of a whole-of-government Secure Document Sharing Platform. As project technical lead, I leveraged my expertise in agile software delivery to foster and build upon the client&apos;s existing agile practices and successfully deliver a production ready MVP (minimum viable product).</>}
              responsibilities={[
                'Continued technical design of a whole of government Secure Document Sharing Platform.',
                'Coordinated collaboration with business representatives to ensure desired outcomes were being achieved by the product backlog.',
                'Coordinated development team and led agile rituals to efficiently achieve time critical milestones.',
                'Guided junior team members to foster their personal development while still maintaining team\'s momentum.',
                'Developed a working MVP of the system which is now used by employees from eligible departments.'
              ]} />
          </TimelineRow>
        </div>

        <div className='animate'>
          <TimelineRow
            id='work-deloitte'
            date='2021'
            image={colourMode === ColourMode.Dark
              ? deloitteDigitalW
              : deloitteDigitalB}
            imageAlt='Deloitte Digital'
            imageLink='//www.deloittedigital.com.au/'
            title='Senior Technical Specialist'
            duration='3 years'
            skills={['.Net', 'React', 'Cloud', 'Teamwork', 'Client Excellence']}
            description={
              <>
                As a Senior Technical Consultant at Deloitte Digital, I worked in several challenging client environments.
                From small agile teams, through to large hybrid-agile programs - solving complex problems was BAU.<br /><br />
                Each project brought a new set of skills to learn and fresh challenges to overcome.
                My time at Deloitte Digital certainly taught me the value of being highly dynamic and flexible but with a strong attention to detail.
              </>
            }>
            <TimelineSubRow
              id='work-deloitte-sdt'
              title='Civil Aviation Safety Authority'
              skills={['Dynamics CRM', 'React', 'Azure', 'Public Sector']}
              description={<>A multi-year engagement focused on delivering a digital transformation of the client&apos;s existing manual forms based applications.</>}
              responsibilities={[
                'Designed and developed an Azure API to generate a digital version of Australian Pilot Licences, leveraging Apple Wallet.',
                'Responsible for the development of Microsoft Dynamics 365 components, including workflows and actions which perform complex business logic.',
                'Coordinated with several project and business teams to gather and define requirements and produce detailed design documentation.',
                'Provided effort and impact assessments to support change management decisions.',
                'Managed team deliverable timelines and tracked project dependencies.'
              ]} />

            <TimelineSubRow
              id='work-deloitte-it-redesign'
              title='Services Australia'
              skills={['UX Testing', 'Web Design', 'PHP', 'Public Sector']}
              description={<>Supported the client with introducing a new internal IT Support system. My team was engaged to ensure business and end-user needs were fulfilled.</>}
              responsibilities={[
                'Supported discovery scope definition by producing process maps and user stories.',
                'Conducted extensive user testing of a Chatbot and Support Portal which were developed by an external vendor.',
                'Designed and developed an online "Utterance Capturing Platform" which allowed users to train the chatbot to be more effective at responding to common questions.',
                'Designed a "User Experience Space" which showcased the product to engage end users, ultimately leading to a successful release and high levels of adoption.'
              ]} />

            <TimelineSubRow
              id='work-deloitte-ozharvest'
              title='OzHarvest'
              skills={['App Design', 'UX Design', 'Private Sector']}
              description={<>Designed a mobile application aimed at helping OzHarvest generate revenue, enabling them to continue their mission within communities around Australia.
              The final prototype can be found <a className='simpleLink' href='//xd.adobe.com/view/fbf72286-7ea3-410d-aa7e-db324d523b8b-aea4/?fullscreen' target='_blank' rel='noreferrer'>here</a>.</>} />
          </TimelineRow>
        </div>

        <div className='animate'>
          <TimelineRow
            id='work-spinify'
            date='2018'
            image={colourMode === ColourMode.Dark
              ? spinifyW
              : spinifyB}
            imageAlt='Spinify'
            imageLink='//spinify.com/'
            title='Full Stack Developer'
            duration='1.5 years'
            skills={['React', 'Node.js', 'AWS', 'Start-up']}
            description={
              <>
                Spinify is a gamification startup which focuses on helping businesses better engage their staff.<br /><br />
                At Spinify I was a critical member of a small, international agile development team.
                We worked at the forefront of industry best practices to deliver valuable releases timely and efficiently.<br /><br />
                The experience of coordinating software development activities across time zones gave me an appreciation of the possibilities of agile project management, when done properly.
              </>
            } />
        </div>

        <div className='animate'>
          <TimelineRow
            id='work-made-for-me'
            date='2016'
            image={colourMode === ColourMode.Dark
              ? madeForMeW
              : madeForMeB}
            imageAlt='Made for Me'
            title='Web Developer'
            duration='1 year'
            skills={['Python', 'DjangoCMS', 'AWS', 'Start-up']}
            description={
              <>
                What started as a internship at a 3D Printing startup soon turned into a part-time position whilst I studied at University.<br /><br />
                I worked as a Web Developer responsible for designing, building and maintaining a Python based website and online 3D Print Quoting Tool.<br /><br />
                Working with unfamiliar tools meant I had to adopt new technologies and frameworks in a short time frame to start delivering value.
              </>
            } />
        </div>

        <div className='animate'>
          <TimelineRow
            date='2015' />
        </div>
      </Section>

      {/* CONTACT */}
      <Section
        id='contact'
        title='contact'
        ref={contactRef}>
        <div className='animate'>
          <p className={styles.para__light} style={{marginBottom: '60px'}}>Reach out with any questions! I typically respond within 2 business days.</p>
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

        <div>
          <SocialList>
            <Icon
              link='//www.linkedin.com/in/j-petty'
              image={linkedInImg}
              imageAlt='LinkedIn' />

            <Icon
              link='//stackoverflow.com/users/5434910/j-petty'
              image={stackOverflowImg}
              imageAlt='Stack Overflow' />

            <Icon
              link='//github.com/j-petty'
              image={githubImg}
              imageAlt='GitHub' />
          </SocialList>
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
