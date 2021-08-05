import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';

import ScrollMenu from '../../components/ScrollMenu/ScrollMenu';
import ScrollMenuItem from '../../components/ScrollMenuItem/ScrollMenuItem';
import Header from '../../components/Header/Header';
import Section from '../../components/Section/Section';
import ProjectRow from '../../components/ProjectRow/ProjectRow';
import TimelineRow from '../../components/TimelineRow/TimelineRow';
import TimelineSubRow from '../../components/TimelineSubRow/TimelineSubRow';
import Form from '../../components/Form/Form';
import FormField from '../../components/FormField/FormField';
import SocialList from '../../components/SocialList/SocialList';
import Icon from '../../components/Icon/Icon';
import Footer from '../../components/Footer/Footer';

import project01Img from '../../assets/images/project01.jpg';
import project02Img from '../../assets/images/project02.jpg';
import project06Img from '../../assets/images/project06.jpg';
import project05Img from '../../assets/images/project05.jpg';
import project04Img from '../../assets/images/project04.jpg';

import agdW from '../../assets/images/agd-w.png';
import agdB from '../../assets/images/agd-b.png';
import deloitteDigitalW from '../../assets/images/deloitte-digital-w.png';
import deloitteDigitalB from '../../assets/images/deloitte-digital-b.png';
import spinifyW from '../../assets/images/spinify-w.png';
import spinifyB from '../../assets/images/spinify-b.png';
import madeForMeW from '../../assets/images/made-for-me-w.png';
import madeForMeB from '../../assets/images/made-for-me-b.png';

import linkedInImg from '../../assets/icons/social-linkedin.svg';
import stackOverflowImg from '../../assets/icons/social-stackoverflow.svg';
import githubImg from '../../assets/icons/social-github.svg';

import reactImg from '../../assets/icons/react.svg';
import dotNetImg from '../../assets/icons/dot-net.svg';
import cloudImg from '../../assets/icons/cloud.svg';
import devOpsImg from '../../assets/icons/devops.svg';

const Home = (props) => {
  const homeRef = useRef(null);
  const projectsRef = useRef(null);
  const workRef = useRef(null);
  const contactRef = useRef(null);

  const { colorMode } = props;

  return (
    <main>
      <Controller>
        <ScrollMenu>
          <ScrollMenuItem link='home' />
          <ScrollMenuItem link='projects'  />
          <ScrollMenuItem link='work'  />
          <ScrollMenuItem link='contact' />
        </ScrollMenu>

        {/* HOME */}
        <Scene
          classToggle={['#scroll-home', 'active']}
          triggerElement='#home'
          duration={() =>
            homeRef.current.clientHeight
          }>
          <Header
            forwardedRef={homeRef}
            skillsArray={[
              'full stack developer',
              'web designer',
              'project lead',
              'technical consultant',
              'entrepreneur',
              'full stack developer'
            ]}
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
            ]}/>
        </Scene>

        {/* PROJECTS */}
        <Scene
          classToggle={['#scroll-projects', 'active']}
          triggerElement='#projects'
          duration={() =>
            projectsRef.current.clientHeight
          }>
          <Section
            id='projects'
            title='projects'
            forwardedRef={projectsRef}>
            <Controller>
              <Scene triggerElement='#projects'>
                {(progress, event) => (
                  <Timeline
                    duration={1}
                    paused
                    playState={
                      event.type === 'enter' && event.scrollDirection === 'FORWARD' ? 'play' :
                        event.type === 'leave' && event.scrollDirection === 'REVERSE' ? 'reverse' :
                          null
                    }>
                    <Tween
                      from={{ opacity: 0, y: 15 }}
                      to={{ opacity: 1, y: 0 }}
                      stagger={0.3}
                      ease='Back.easeInOut'>
                      <div className='animate'>
                        <ProjectRow
                          title='Freelance Web Design'
                          skills={['Web Design', 'eCommerce', 'CMS']}
                          description="Initially freelance web design, now growing into a small digital creative agency. Visit the site to check out our latest work."
                          image={project01Img}
                          imageAlt='Whtspc'
                          linkText='whtspc.com.au'
                          link='//whtspc.com.au/' />
                      </div>

                      <div className='animate'>
                        <ProjectRow
                          title='MyWay Balance'
                          skills={['iOS', 'Android', 'Xamarin']}
                          description="Born out of frustration from using the clunky website to check my public transport card balance. I built a simple app that lets people check their MyWay card balance right from their phones."
                          image={project02Img}
                          imageAlt='MyWay Balance' />
                      </div>

                      <div className='animate'>
                        <ProjectRow
                          title='Digital Pass Provider'
                          skills={['Asp.Net', 'Azure', 'Apple', 'Google']}
                          description="An API first platform which simplifies the process of generating digital Passes for the Apple and Google wallets. Intended to simplify the process of integrating with digital wallet solutions."
                          image={project06Img}
                          imageAlt='Simplifying digital wallets.' />
                      </div>

                      <div className='animate'>
                        <ProjectRow
                          title='Digital Quiz'
                          skills={['React', 'Node.js', 'AWS']}
                          description="An online quiz powered by a cloud REST API. Designed to help educate people about Digital Transformation and demystify some common misconceptions."
                          image={project05Img}
                          imageAlt='Educating the masses.' />
                      </div>

                      <div className='animate'>
                        <ProjectRow
                          title='Beached'
                          skills={['.Net', 'MonoGame', 'Game Design']}
                          description="A small survival game, built using the bare-bones game development toolkit, MonoGame. Featuring a randomly generated island and pesky chickens. Play it now on Steam."
                          image={project04Img}
                          imageAlt='Survival RPG.'
                          linkText='View on Steam'
                          link='//store.steampowered.com/app/652560/Beached/' />
                      </div>

                      {/*<div className='animate'>
                        <ProjectRow
                          title='Portfolio'
                          skills={['React', 'Web Design']}
                          description="The page you're looking at right now. Built using React, just for a bit of fun. Feel free to drop any feedback below."
                          image={project03Img}
                          imageAlt='Showcasing creative ideas.' />
                      </div>*/}
                    </Tween>
                  </Timeline>
                )}
              </Scene>
            </Controller>
          </Section>
        </Scene>

        {/* WORK */}
        <Scene
          classToggle={['#scroll-work', 'active']}
          triggerElement='#work'
          duration={() =>
            workRef.current.clientHeight
          }>
          <Section
            id='work'
            title='work'
            forwardedRef={workRef}>
            <Controller>
              <Scene triggerElement='#work'>
                {(progress, event) => (
                  <Timeline
                    duration={2}
                    paused
                    playState={
                      event.type === 'enter' && event.scrollDirection === 'FORWARD' ? 'play' :
                        event.type === 'leave' && event.scrollDirection === 'REVERSE' ? 'reverse' :
                          null
                    }>
                    <Tween
                      from={{ opacity: 0, y: 15 }}
                      to={{ opacity: 1, y: 0 }}
                      stagger={0.3}
                      ease='Back.easeInOut'>
                      <div className='animate'>
                        <TimelineRow
                          id='work-agd'
                          date='today'
                          image={colorMode === 'dark'
                            ? agdW
                            : agdB}
                          imageAlt="Attorney-General's Department"
                          imageLink='//www.ag.gov.au/'
                          title='Senior Full-stack Developer'
                          skills={['.Net', 'React', 'Azure', 'Agile', 'Public Sector', 'Contractor']}
                          description={
                            <>
                              Contracting with the Attorney-General&apos;s department as a full-stack developer and project technical lead offered exposure to new technologies and personal growth opportunities.
                              The client&apos;s strict security posture required creative solutions to some typically simple technical challenges.
                            </>
                          } >
                          <TimelineSubRow
                            id='work-agd-doc'
                            title='Secure Document Sharing Platform'
                            skills={['Technical Lead', 'React', '.Net', 'Azure']}
                            description={<>As project technical lead, I leveraged my expertise in Agile software delivery to foster and build upon the client&apos;s existing Agile practices and successfully deliver a working MVP (minimum viable product).</>}
                            responsibilities={[
                              'Continued technical design of a whole of government Secure Document Sharing Platform.',
                              'Coordinated collaboration with business representatives to ensure desired outcomes were being achieved.',
                              'Developed a working MVP of the system based on extensive Product Backlog.',
                              'Coordinate development team and led Agile rituals to efficiently achieve milestones on time.'
                            ]} />
                        </TimelineRow>
                      </div>

                      <div className='animate'>
                        <TimelineRow
                          id='work-deloitte'
                          date='2021'
                          image={colorMode === 'dark'
                            ? deloitteDigitalW
                            : deloitteDigitalB}
                          imageAlt='Deloitte Digital'
                          imageLink='//www.deloittedigital.com.au/'
                          title='Senior Technical Specialist'
                          duration='3y 2m'
                          skills={['.Net', 'React', 'Cloud', 'Leadership', 'Teamwork', 'Client Excellence']}
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
                            The final prototype can be found <a className='simpleLink' href="//xd.adobe.com/view/fbf72286-7ea3-410d-aa7e-db324d523b8b-aea4/?fullscreen" target="_blank" rel="noreferrer">here</a>.</>} />
                        </TimelineRow>
                      </div>

                      <div className='animate'>
                        <TimelineRow
                          id='work-spinify'
                          date='2018'
                          image={colorMode === 'dark'
                            ? spinifyW
                            : spinifyB}
                          imageAlt='Spinify'
                          imageLink='//spinify.com/'
                          title='Full Stack Developer'
                          duration='1y 5m'
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
                          image={colorMode === 'dark'
                            ? madeForMeW
                            : madeForMeB}
                          imageAlt='Made for Me'
                          title='Web Developer'
                          duration='1y 2m'
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
                    </Tween>
                  </Timeline>
                )}
              </Scene>
            </Controller>
          </Section>
        </Scene>

        {/* CONTACT */}
        <Scene
          classToggle={['#scroll-contact', 'active']}
          triggerElement='#contact'
          duration={() =>
            contactRef.current.clientHeight
          }>
          <Section
            id='contact'
            title='contact'
            forwardedRef={contactRef}>
            <Controller>
              <Scene
                triggerElement='#contact'>
                {(progress, event) => (
                  <Timeline
                    duration={1}
                    paused
                    playState={
                      event.type === 'enter' && event.scrollDirection === 'FORWARD' ? 'play' :
                        event.type === 'leave' && event.scrollDirection === 'REVERSE' ? 'reverse' :
                          null
                    }>
                    <Tween
                      from={{ opacity: 0, y: 15 }}
                      to={{ opacity: 1, y: 0 }}
                      stagger={0.3}
                      ease='Back.easeInOut'>
                      <div className='animate'>
                        <Form action='contact.php'>
                          <FormField
                            name='name'
                            label='name'
                            type='text'
                            pattern={/[^a-zA-Z" "'-]/}
                            maxLength={30}
                            isRequired={true} />

                          <FormField
                            name='email'
                            label='email'
                            type='email'
                            maxLength={255}
                            isRequired={true} />

                          <FormField
                            name='message'
                            label='message'
                            type='textarea'
                            pattern={/[^a-zA-Z0-9.,?'!\s()-]/}
                            maxLength={255}
                            isRequired={true} />

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
                    </Tween>
                  </Timeline>
                )}
              </Scene>
            </Controller>
          </Section>
        </Scene>

        {/* FOOTER */}
        <Scene triggerElement='#contact'>
          {(progress, event) => (
            <Timeline
              duration={1}
              paused
              playState={
                event.type === 'enter' && event.scrollDirection === 'FORWARD' ? 'play' :
                  event.type === 'leave' && event.scrollDirection === 'REVERSE' ? 'reverse' :
                    null
              }>
              <Tween
                from={{ opacity: 0 }}
                to={{ opacity: 1 }}
                ease='Back.easeInOut'>
                <div className='animate'>
                  <Footer
                    link='/'
                    name='James Petty' />
                </div>
              </Tween>
            </Timeline>
          )}
        </Scene>
      </Controller>
    </main>
  );
};

Home.propTypes = {
  colorMode: PropTypes.string
};

export default Home;
