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
import SocialIcon from '../../components/SocialIcon/SocialIcon';
import Footer from '../../components/Footer/Footer';

import project01Img from '../../assets/images/project01.jpg';
import project06Img from '../../assets/images/project06.jpg';
import project05Img from '../../assets/images/project05.jpg';
import project04Img from '../../assets/images/project04.jpg';
import project03Img from '../../assets/images/project03.jpg';

import cordeltaDigitalW from '../../assets/images/cordelta-digital-w.png';
import cordeltaDigitalB from '../../assets/images/cordelta-digital-b.png';
import deloitteDigitalW from '../../assets/images/deloitte-digital-w.png';
import deloitteDigitalB from '../../assets/images/deloitte-digital-b.png';
import spinifyW from '../../assets/images/spinify-w.png';
import spinifyB from '../../assets/images/spinify-b.png';
import madeForMeW from '../../assets/images/made-for-me-w.png';
import madeForMeB from '../../assets/images/made-for-me-b.png';

import linkedInImg from '../../assets/images/social-linkedin.svg';
import stackOverflowImg from '../../assets/images/social-stackoverflow.svg';
import githubImg from '../../assets/images/social-github.svg';

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
              'tech lead',
              'technical consultant',
              'entrepreneur',
              'full stack developer']} />
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
                          link='//store.steampowered.com/app/652560/Beached/' />
                      </div>

                      <div className='animate'>
                        <ProjectRow
                          title='Portfolio'
                          skills={['React', 'Web Design']}
                          description="The page you're looking at right now. Built using React, just for a bit of fun. Feel free to drop any feedback below."
                          image={project03Img}
                          imageAlt='Showcasing creative ideas.' />
                      </div>
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
                          id='work-cordelta'
                          date='today'
                          image={colorMode === 'dark'
                            ? cordeltaDigitalW
                            : cordeltaDigitalB}
                          imageAlt='Cordelta Digital'
                          imageLink='//cordelta.digital/'
                          title='Senior Full Stack Developer'
                          skills={['.Net', 'React', 'Azure', 'Agile', 'Contractor']}
                          description={
                            <>
                              Contracting with Cordelta Digital has already offered exposure to more client environments, furthering my experience as a Full Stack Developer.
                            </>
                          } >
                          <TimelineSubRow
                            id='work-cordelta-doc'
                            title='Protected Document Sharing Platform'
                            skills={['React', '.Net', 'Azure', 'Team Lead', 'Public Sector']}
                            description={<>In my current role as a team lead on a Public Sector engagement I&apos;m leveraging my expertise in Agile project delivery to foster and build upon the clients existing Agile practices.</>}
                            responsibilities={[
                              'Continue technical design of a Protected Document Sharing Platform in collaboration with business representatives.',
                              'Develop an MVP of the system based on extensive Product Backlog.',
                              'Coordinate development team and lead Agile rituals to efficiently reach client outcomes.'
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
                          skills={['.Net', 'React', 'Cloud', 'Leadership', 'Teamwork', 'Client Excellence']}
                          description={
                            <>
                              As a Senior Technical Consultant at Deloitte Digital, I&apos;ve worked in several different client environments.
                              From small agile teams, through to large hybrid-agile programs - solving complex problems is BAU.<br /><br />
                              Each project brings a new set of skills to learn and fresh challenges to overcome.
                              If I had to pick one thing, Deloitte Digital has certainly shown me the innate value of being highly dynamic but thorough.
                            </>
                          }>
                          <TimelineSubRow
                            id='work-deloitte-sdt'
                            title='Service Delivery Transformation'
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
                            title='ITS System Redesign'
                            skills={['UX Testing', 'Web Design', 'PHP', 'Public Sector']}
                            description={<>Supported the client with introducing a new internal IT Support system. My team was engaged to ensure business and end-user needs were fulfilled.</>}
                            responsibilities={[
                              'Supported discovery scope definition by producing process maps and user stories.',
                              'Conducted extensive user testing of a Chatbot and Support Portal which were developed by an external vendor.',
                              'Designed and developed an online "Utterance Capturing Platform" which allowed users to train the chatbot to be more effective at responding to common questions.',
                              'Designed a "User Experience Space" which showcased the end product to engage end users, ultimately leading to a successful release and high levels of adoption.'
                            ]} />
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
                          skills={['React', 'Node.js', 'AWS', 'Start-up']}
                          description={
                            <>
                              Spinify is a gamification startup which focuses on helping businesses better engage their staff.<br /><br />
                              At Spinify I was a critical member of a small, international agile development team.
                              We worked at the forefront of industry best practices to deliver valuable releases timely and efficiently.<br /><br />
                              The experience of coordinating software development activities across timezones gave me an appreciation of the possibilities of agile project management, when done properly.
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
                          <SocialIcon
                            link='//www.linkedin.com/in/j-petty'
                            image={linkedInImg}
                            imageAlt='LinkedIn' />

                          <SocialIcon
                            link='//stackoverflow.com/users/5434910/j-petty'
                            image={stackOverflowImg}
                            imageAlt='Stack Overflow' />

                          <SocialIcon
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
