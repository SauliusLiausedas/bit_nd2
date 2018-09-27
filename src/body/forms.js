import React, { Component } from 'react'
import '../stylesheets/forms.css';

class Forms extends Component {
  
  constructor(props) {
  	super()
  	this.state = {
	  		undo: false,
			firstName: "",
			lastName: "",
			email: "",
			password: "",
			birthMonth: ""
  		}
  	}

  getInfo(e) {
  	console.log(e.target.id)
  	switch (e.target.id) {
  		case "firstName":
  		console.log("VEIKIA")
  		break;
  		case "lastName":
  		console.log("PAVARDE")
  		break;
  		default:
  		console.log("neveikia")
  	}
  }

  render() {
    return (
      <div>
      	<div classname="main-form">
        	<h1 className="formh1"> LABA DIENA </h1>
        	First Name <input id="firstName" onChange={(e)=> this.getInfo(e)} /><br/>
        	Last Name <input id="lastName" onChange={(e)=> this.getInfo(e)}/><br/>
        	Email <input id="email" onChange={(e)=> this.getInfo(e)}/><br/>
        	Password <input id="password" onChange={(e)=> this.getInfo(e)}/><br/>
        	Birth Month <select id="month">
        		<option> June </option>
        		<option> July </option>
        		<option> August </option>
        	</select>
        </div>
      </div>
    );
  }
}

export default Forms;