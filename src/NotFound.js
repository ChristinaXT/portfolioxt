import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class NotFound extends Component {
  render() {
    return (

        <div id="notfound">
      		<div className="notfound">
      			<div className="notfound-404">
      				<h3>Oops! Page not found</h3>
      				<h1><span>4</span><span>0</span><span>4</span></h1>
      			</div>
      			<h2>we're sorry, but the page you requested was not found</h2>
            <button><a href="/">Go To Homepage</a></button>
      		</div>
      	</div>

    );
  }
}

export default NotFound;
