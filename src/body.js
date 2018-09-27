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

  constructor(props) {
    super();
    this.state = {
      topText: "blabla"
    }
  }

  addText() {
    this.setState({topText: "tekstas"})
  }

  changeOnType(e) {
    this.setState({topText: e.target.value})
  }

  render() {
    return (
      <div className="banner center">
          <h1> {this.state.topText} </h1>
          <button onClick={()=>this.addText("test")}> Clickable </button><br/><br/>
          <input onChange={(e)=> this.changeOnType(e)}/>
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