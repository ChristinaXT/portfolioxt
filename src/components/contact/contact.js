import React, { Component } from 'react';
export default class Contact extends Component {
  render() {
    return (
      <React.Fragment>
      <section id="contact">
        <div className="row section-head">
          <div className="two columns header-col">
            <h1><span></span></h1>
          </div>
          <div className="ten columns">
            <p className="lead">Get in Touch</p>
          </div>
        </div>
        <div className="row">
          <aside className="four columns footer-widgets">
            <div className="widget widget_contact">
              <h4>Contact</h4>
              <p className="address">
                <a>Christina Williams</a><br />
              <span><a target="_blank" href="https://www.linkedin.com/in/christina-xt-williams/">LinkedIn: <i className="fa fa-linkedin" /></a><br/>
              <a target="_blank" href="https://github.com/ChristinaXT">GitHub: <i className="fa fa-github" /></a></span>
              <br/>
                <span><a href="mailto:christinaxtwilliams@gmail.com">E-mail Me <i className="icon-mail"></i></a></span>
              </p>
            </div>
          </aside>
        </div>
      </section>
      </React.Fragment>
    );
  }
}
