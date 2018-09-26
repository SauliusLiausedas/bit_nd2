import React, { Component } from 'react';

class Body extends Component {
  render() {
    return (
      <Left />
    );
  }
}

class Left extends Component {
	render() {
		<div className="banner">
        	<h1 className="bannerTitle">Links</h1>
        	<ul>
	        	<li><a href="http://localhost:3000/">First</a></li>
	        	<li><a href="http://localhost:3000/">Second</a></li>
	        	<li><a href="http://localhost:3000/">Third</a></li>
	        	<li><a href="http://localhost:3000/">Fourth</a></li>
	        	<li><a href="http://localhost:3000/">Fifth</a></li>
	        </ul>
      </div>
	}
}

export default Body;