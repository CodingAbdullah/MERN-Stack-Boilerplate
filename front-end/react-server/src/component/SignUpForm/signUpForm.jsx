import React, { Component} from 'react';
import './signUpForm.css'

class SignUpForm extends Component {

    // Boilerplate code for a simple sign up form

    constructor(props){
        super(props);

        this.state = {
            firstname: "",
            lastname: "",
            age: 1,
            email: "",
            password: ""
        }
    }

    formHandler = (event) => {
        this.setState({[event.target.name] : event.target.value});
    }

    // Proxy server was set to http://localhost:5056 to communicate with node server on the back end in the package json
    formSubmit = () => {
        fetch("/signUpForm", {
            method: "POST",
            body : JSON.stringify(this.state)
        })
        .then(res => res.json())
        .then(result => {
            /* PERFORM VALIDATION */
        })
        .catch(err => console.log(err));
    }

    // Render a sample form to the dom

    render(){
        return (
            <div className="signUpForm">
                <form action="/signUpForm" method="POST">
                    <label>First Name:</label>
                    <input name="firstname" type="text" value="" onChange={this.formHandler}></input>
                    <label>Last Name:</label>
                    <input type="text" name="lastname" value="" onChange={this.formHandler}></input>
                    <label>Age:</label>
                    <input type="number" min="1" max="100" name="age" value="" onChange={this.formHandler}></input>
                    <label>Email:</label>
                    <input type="email" name="email" value="" onChange={this.formHandler}></input>
                    <label>Password:</label>
                    <input type="password" name="password" value="" onChange={this.formHandler}></input>
                    <button onClick={this.formSubmit} type="submit">Sign Up!</button>
                </form>
            </div>
        )
    }
}

export default SignUpForm;
