import React, { Component } from 'react';
export default class Footer extends Component {
  render() {
    return (
      <React.Fragment>
      <footer>
        <div className="row">
          <div className="twelve columns">
            <ul className="social-links">
              <li><a target="_blank" href="https://www.linkedin.com/in/christina-xt-williams/"><i className="fa fa-linkedin" /></a></li>
              <li><a target="_blank" href="https://github.com/ChristinaXT"><i className="fa fa-github" /></a></li>
            </ul>
            <ul className="copyright">
              <li>© {(new Date().getFullYear())} Christina Williams</li>
            </ul>
          </div>
          <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
        </div>
      </footer>
      </React.Fragment>
    );
  }
}
