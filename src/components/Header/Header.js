import React from 'react';
import TextLoop from 'react-text-loop';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './Header.css';

class Header extends React.Component {
  constructor (props) {
    super(props);

    // TODO: remove from state?
    this.state = {
      skillsArray: ['stuff', 'websites', 'games', 'apps']
    };
  }

  render () {
    const { skillsArray } = this.state;

    return (
      <header className="fullHeight mainHeader text-center">
        {/*<Container>
          <Row className="align-items-center text-center fullHeight">
            <Col>
              <h1 className="mainTitle">Hi I&apos;m James.</h1>

              <div className="subTitle">
                <span>I build </span>

                <TextLoop
                  delay={500}
                  interval={1500}>
                  {skillsArray.map(skill =>
                    <span key={skill} className="skills">{skill}</span>
                  )}
                </TextLoop>
              </div>

              <div className="nudge">see my work</div>
            </Col>
          </Row>
        </Container>*/}
        <h1 className="mainTitle">Hi I&apos;m James.</h1>

        <div className="subTitle">
          <span>I build </span>

          <TextLoop
            delay={500}
            interval={1500}>
            {skillsArray.map(skill =>
              <span key={skill} className="skills">{skill}</span>
            )}
          </TextLoop>
        </div>

        <a className="nudge">see my work</a>
      </header>
    );
  }
}

export default Header;
