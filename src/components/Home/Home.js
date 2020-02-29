import React from 'react';
import PropTypes from 'prop-types';
import 'intersection-observer';
import Observer from '@researchgate/react-intersection-observer';

import ScrollMenu from '../ScrollMenu/ScrollMenu';
import ScrollMenuItem from '../ScrollMenuItem/ScrollMenuItem';
import Header from '../Header/Header';
import Section from '../Section/Section';
import ProjectRow from '../ProjectRow/ProjectRow';
import TimelineRow from '../TimelineRow/TimelineRow';
import TimelineSubRow from '../TimelineSubRow/TimelineSubRow';
import Form from '../Form/Form';
import FormField from '../FormField/FormField';
import SocialList from '../SocialList/SocialList';
import SocialIcon from '../SocialIcon/SocialIcon';
import Footer from '../Footer/Footer';

import styles from './Home.module.css';

class Home extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      currentSection: null
    };
  }

  handleScroll (senderLocation, { isIntersecting }) {
    if (!isIntersecting) {
      return;
    }

    // update state to reference the currently intersected view
    this.setState({
      currentSection: senderLocation
    });
  }

  render () {
    const { colorMode } = this.props;
    const { currentSection } = this.state;

    return (
      <main className={styles.container}>
        <ScrollMenu>
          <ScrollMenuItem
            link='/#home'
            inView={currentSection === 'home'} />

          <ScrollMenuItem
            link='/#projects'
            inView={currentSection === 'projects'} />

          <ScrollMenuItem
            link='/#work'
            inView={currentSection === 'work'} />

          <ScrollMenuItem
            link='/#contact'
            inView={currentSection === 'contact'} />
        </ScrollMenu>

        <Observer onChange={(e) => this.handleScroll('home', e)}>
          <Header skillsArray={[
            'full stack developer',
            'web designer',
            'front end developer',
            'technical consultant',
            'entrepreneur',
            'full stack developer']} />
        </Observer>

        <Observer onChange={(e) => this.handleScroll('projects', e)}>
          <Section
            id='projects'
            title='projects'>
            <ProjectRow
              title='Freelance Web Design'
              skills={['WordPress', 'Web Design', 'ReactJS']}
              description="Started out as freelance web design, slowly growing into a small digital creative agency. Visit the site to checkout our latest work."
              image={require('../../assets/images/project01.jpg')}
              imageAlt='Whtspc Digital'
              link='//whtspcdigital.com.au/'
              linkText='coming soon' />

            <ProjectRow
              title='Beached'
              skills={['C#', 'MonoGame', 'Game Design']}
              description="A small survival game, built using the bare-bones game development toolkit, MonoGame. Featuring a randomly generated island and pesky chickens. Play it now on Steam."
              image={require('../../assets/images/project04.jpg')}
              imageAlt='Survival RPG.'
              link='//store.steampowered.com/app/652560/Beached/' />

            <ProjectRow
              title='Digital Quiz'
              skills={['ReactJS', 'Node.js', 'AWS']}
              description="An online quiz powered by a cloud REST API. Designed to help educate people about Digital Transformation and demystify some common misconceptions."
              image={require('../../assets/images/project05.jpg')}
              imageAlt='Showcasing creative ideas.'
              link='//quiz.d3fhu63w0eoi3r.amplifyapp.com/' />

            <ProjectRow
              title='Portfolio'
              skills={['ReactJS', 'Web Design']}
              description="The page you're looking at right now. Built using ReactJS, just for a bit of fun. Feel free to drop any feedback below."
              image={require('../../assets/images/project03.jpg')}
              imageAlt='Showcasing creative ideas.' />

            {/*<ProjectRow
              title='Startups'
              skills={['AWS', 'ReactJS', 'Xamarin']}
              description="Parallel entrepreneurial endeavors ranging from social networks to native apps. Ask me which game-changing idea I'm working on today..."
              image={require('../../assets/images/project01.jpg')}
              imageAlt='Building better things. To make things better.' />*/}
          </Section>
        </Observer>

        <Observer onChange={(e) => this.handleScroll('work', e)}>
          <Section
            id='work'
            title='work'>
            <TimelineRow
              date='today'
              image={colorMode === 'dark'
                ? require('../../assets/images/deloitte-digital-w.png')
                : require('../../assets/images/deloitte-digital-b.png')}
              imageAlt='Deloitte Digital'
              imageLink='//www.deloittedigital.com.au/'
              skills={['Client Excellence', 'Teamwork', 'Critical Thinking']}
              description={`
                As a Technical Consultant at Deloitte Digital, I've worked in several different client environments.
                From small agile teams, through to large hybrid-agile programs - solving complex problems is BAU.
                Each project brings a new set skills to learn and a fresh set of challenges to overcome.
                If I had to pick one thing, Deloitte Digital has certainly shown me the innate value of being dynamic but thorough.
              `}>
              <TimelineSubRow
                title='Service Delivery Transformation'
                skills={['Dynamics CRM', 'ReactJS']}
                description={`
                  As a core part of the Solution Design team I coordinated with several project and business teams to gather and define requirements and produce detailed design documentation. 
                  During build phases of the project I was primarily responsible for the development of Microsoft Dynamics 365 components, including workflows and actions which preform complex business logic to process end-user submitted applications. 
                  My work, along with the rest of the team, helped maintain that the technologies delivered continued to align with both industry best practices and the client's evolving business needs.
                `} />

              <TimelineSubRow
                title='IT Support Redesign'
                skills={['UX Testing', 'Web Design', 'PHP']}
                description={`
                  The client was introducing a new internal IT Support system. My team was engaged to ensure business and end-user needs were fulfilled. 
                  I supported early discovery scope definition by producing process maps and user stories. 
                  We conducted extensive user testing of a Chatbot and Support Portal which were developed by an external vendor. 
                  During the project I designed and developed an online 'Utterance Capturing Platform' which allowed users to train the chatbot to be more effective at responding to common questions. 
                  In addition, I designed a 'User Experience Space' which showcased the end product to align perspectives and engage end users, ultimately leading to a successful release and high levels of adoption.
                `} />
            </TimelineRow>

            <TimelineRow
              date='2018'
              image={colorMode === 'dark'
                ? require('../../assets/images/spinify-w.png')
                : require('../../assets/images/spinify-b.png')}
              imageAlt='Spinify'
              imageLink='//spinify.com/'
              skills={['ReactJS', 'Node.js', 'AWS']}
              description={`
                Spinify is a gamification startup which focuses on helping businesses better engage their staff.
                At Spinify I was a critical member of a small, international agile development team.
                We worked at the forefront of industry best practices to ensure we we're delivering valuable releases timely and efficiently.
                The experience of coordinating software development activities across timezones gave me an appreciation of the possibilities of agile project management, when done properly.
              `} />

            <TimelineRow
              date='2016'
              image={colorMode === 'dark'
                ? require('../../assets/images/made-for-me-w.png')
                : require('../../assets/images/made-for-me-b.png')}
              imageAlt='Made for Me'
              skills={['Python', 'DjangoCMS', 'AWS']}
              description={`
                What started as a internship at a 3D Printing startup soon turned into a part-time position whilst I studied at University.
                I worked as a Web Developer responsible for designing, building and maintaining a Python based website and online 3D Print Quoting Tool.
                Working with unfamilar tools meant I had to pickup new technologies and frameworks in a short timeframe to start delivering value.
              `} />

            <TimelineRow
              date='2015' />
          </Section>
        </Observer>

        <Observer onChange={(e) => this.handleScroll('contact', e)}>
          <Section
            id='contact'
            title='contact'>
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

            <SocialList>
              <SocialIcon
                link='//www.facebook.com/jpetty'
                image={require('../../assets/images/social-facebook.svg')}
                imageAlt='Facebook' />

              <SocialIcon
                link='//www.linkedin.com/in/j-petty'
                image={require('../../assets/images/social-linkedin.svg')}
                imageAlt='LinkedIn' />

              <SocialIcon
                link='//stackoverflow.com/users/5434910/j-petty'
                image={require('../../assets/images/social-stackoverflow.svg')}
                imageAlt='Stack Overflow' />

              <SocialIcon
                link='//github.com/j-petty'
                image={require('../../assets/images/social-github.svg')}
                imageAlt='GitHub' />
            </SocialList>
          </Section>
        </Observer>

        <Footer
          link='/'
          name='James Petty' />
      </main>
    );
  }
}

Home.propTypes = {
  colorMode: PropTypes.string
};

export default Home;
