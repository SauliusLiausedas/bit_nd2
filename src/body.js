import React, { Component } from 'react';
import lorem from './img/lorem.jpg'

const linksLeft = ["First", "Second", "Third", "Fourth", "Fifth"]
const linksRight = ["One", 'Two', "Three", "Four", "Five"]

class Body extends Component {
  render() {
    return (
      <div>
        <Left links={linksLeft} />
        <Center />
        <Right links={linksRight} />
      </div>
    );
  }
}

class Left extends Component {
  render() {
    return (
      <div className="banner left">
          <h1 className="bannerTitle">Links</h1>
          <ul>
            {this.props.links.map(link => <li><a href="#"> {link} </a></li>)}
          </ul>
      </div>
    );
  }
}

class Center extends Component {
  render() {
    return (
      <div className="banner center">
          <h1 className="bannerTitle">Text</h1>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare dignissim elit, vitae tristique nulla maximus in. Etiam ornare gravida vulputate. Nam vulputate at nibh quis bibendum. Aenean eu dolor at felis auctor faucibus. In vel eros elementum, iaculis elit ut, tristique odio. Donec blandit metus purus, quis ultrices mauris ultricies et. Maecenas mollis pulvinar lorem, non vestibulum risus eleifend in. Nullam eu aliquet justo. </p>
          <img className="loremTag" src={lorem}/>
      </div>
    );
  }
}

class Right extends Component {
  render() {
    return (
      <div className="banner right">
          <h1 className="bannerTitle">Links</h1>
          <ul>
            {this.props.links.map(link => <li><a href="#"> {link} </a></li>)}
          </ul>
      </div>
    );
  }
}

export default Body;