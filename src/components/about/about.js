import React, { Component } from 'react';
export default class About extends Component {
  render() {
    return (
      <React.Fragment>
      <section id="about">
              <div className="row">
                <div className="three columns">
                  <img className="profile-pic" src="images/xtina.jpg" alt />
                  </div>
                <div className="nine columns main-col">
                  <h2>About Me</h2>
                  <p>As a lifelong artist, I approach coding with the same openness and creativity. The challenges of web development are fun, exciting and inspiring. I look forward to solving every problem that arises and satisfying the needs of every client.
                  </p>
                  <div className="row">
                    <div className="columns contact-details">
                      <h2>Contact</h2>
                      <p className="address">
                        <span>Christina Williams</span><br />

                      <span><a target="_blank" href="https://www.linkedin.com/in/christina-xt-williams/">LinkedIn: <i className="fa fa-linkedin" /></a>

                      <br/>

                      <a target="_blank" href="https://github.com/ChristinaXT">GitHub: <i className="fa fa-github" /></a></span><br />

                      <span><a href="mailto:christinaxtwilliams@gmail.com">E-mail Me <i className="fa fa-envelope" /></a></span>
                      </p>
                    </div>
                    <div className="columns download">
                      <p>
                        <a target="_blank" href="pdf/new resume 2020 pdf.pdf" className="button"><i className="fa fa-download" />View / Download Resume</a>
                      </p>
                    </div>
                    </div> {/* end row */}
                  </div> {/* end .main-col */}
                
              </div>
            </section>
      </React.Fragment>
    );
  }
}
