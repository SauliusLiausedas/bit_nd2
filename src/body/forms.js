import React, { Component } from 'react'
import '../stylesheets/forms.css';

const monthsArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
const buttonText = ["Reset", "Undo"]
let stateCopy = {}



class Forms extends Component {
  
  constructor(props) {
  	super()
  	this.firstNameInput = React.createRef()
  	this.lastNameInput = React.createRef()
  	this.emailInput = React.createRef()
  	this.passwordInput = React.createRef()
  	this.monthInput = React.createRef()
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
  	switch (e.target.id) {
  		case "firstName":
  		this.setState({firstName: e.target.value})
  		break
  		case "lastName":
  		this.setState({lastName: e.target.value})
  		break
  		case "email":
  		this.setState({email: e.target.value})
  		break
  		case "password":
  		this.setState({password: e.target.value})
  		break;
  		default:
  		console.log("neveikia")
  	}
  }

  handleButtonClick(e) {
  	e.preventDefault()
  	if (this.state.undo === false) {
		stateCopy = this.state
		this.setState({undo: true,
						firstName: "",
						lastName: "",
						email: "",
						password: "",
						birthMonth: ""
					})
		this.firstNameInput.current.value = ""
		this.lastNameInput.current.value = ""
		this.emailInput.current.value = ""
		this.passwordInput.current.value = ""

  	} else {
  		this.setState(stateCopy)
  		this.firstNameInput.current.value = stateCopy.firstName
		this.lastNameInput.current.value = stateCopy.lastName
		this.emailInput.current.value = stateCopy.email
		this.passwordInput.current.value = stateCopy.password
  	}
  }

  render() {
    return (
      <div>
      	<div classname="main-form">
        	<h1 className="formh1"> FILL THE FORM </h1>
        	<form>
	        	<label> First Name </label> <br/><input id="firstName" ref={this.firstNameInput} onChange={(e)=> this.getInfo(e)} /><br/>
	        	<label> Last Name </label> <br/><input id="lastName" ref={this.lastNameInput} onChange={(e)=> this.getInfo(e)}/><br/>
	        	<label> Email </label><br/><input id="email" ref={this.emailInput} onChange={(e)=> this.getInfo(e)}/><br/>
	        	<label> Password </label><br/><input id="password" ref={this.passwordInput} onChange={(e)=> this.getInfo(e)}/><br/>
	        	<label> Birth Month</label><Months months={monthsArr} /> 
	        	<br/><button onClick={(e) => this.handleButtonClick(e)}> {this.state.undo ? buttonText[1] : buttonText[0]} </button>
        	</form>
        </div>
      </div>
    );
  }
}

class Months extends Component {
  render() {
    return (
        <select id="month" ref={this.monthInput}>
        	{this.props.months.map(month => <option value={month}> {month} </option>)}
        </select>
    );
  }
}

export default Forms;