import React, { Component } from 'react'
import '../stylesheets/forms.css';

const monthsArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
const buttonText = ["Reset", "Undo"]
let stateCopy = {}

let globalState = {}
let setState;

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
  	globalState = this.state
  	setState = this.setState
  	}

  getInfo(e) {
    console.log(this.state.undo)
      if(this.state.undo === true){
        this.setState({undo: false})
      }
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
    console.log(e.target)
  	if (this.state.undo === false) {
		stateCopy = this.state
		this.setState({
            undo: true,
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
		console.log(this.state)

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
	monthChange(e) {
  		globalState;
  		setState;
  		debugger;
  	}
  render() {
    console.log(this.props)
    return (
        <select id="month" onChange={(e)=> this.monthChange(e)} ref={this.monthInput}>
        	{this.props.months.map(month => <option value={month}> {month} </option>)}
        </select>
    );
  }
}

export default Forms;

// Kaip padaryti, kad select su optionsais veiktų vietoj nedarant naujo komponento