import React, { Component } from 'react';
export default class Resume extends Component {
  render() {
    return (
      <React.Fragment>
      <section id="resume">
        {/* Skills
      ----------------------------------------------- */}
        <div className="row skill">
          <div className="three columns header-col">
            <h1><span>Skills</span></h1>
          </div>
          <div className="nine columns main-col">
            <p>Areas of Experience include:<br/><br/>

              <i className="fa fa-code"/>	FRONT-END: HTML/CSS, Bootstrap, Bulma, Javascript, jQuery, AJAX, Node.js, React.js Redux.js, SCSS SASS<br/><br/>

              <i className="fa fa-code"/>	BACK-END: NoSQL, Ruby on Rails, MySQL, PostgreSQL, Sinatra, Ruby, ROR API<br/><br/>

              <i className="fa fa-code"/>	SOFTWARE: Atom, Bash, Terminal, Excel, Power Point,  Illustrator [Ai], Photoshop [Ps]<br/><br/>

              <i className="fa fa-code"/>	ADDITIONAL: GitHub, Wordpress, HubSpot, Heroku, SVG, Composer, Slack, Zoom
            </p>
            <div className="bars">
              <ul className="skills">
                <div className="left-skills">
                  <li><span className="bar-expand css" /><em>CSS</em></li>
                  <li><span className="bar-expand html5" /><em>HTML5</em></li>
                  <li><span className="bar-expand javascript" /><em>JavaScript</em></li>
                  <li><span className="bar-expand jquery" /><em>jQuery</em></li>
                </div>
                <div className="right-skills">
                  <li><span className="bar-expand wordpress" /><em>Wordpress</em></li>
                  <li><span className="bar-expand hubspot" /><em>HubSpot</em></li>
                  <li><span className="bar-expand ruby" /><em>Ruby on Rails</em></li>
                </div>

              </ul>
            </div>{/* end skill-bars */}
          </div> {/* main-col end */}
        </div> {/* End skills */}
      </section>
      </React.Fragment>
    );
  }
}
