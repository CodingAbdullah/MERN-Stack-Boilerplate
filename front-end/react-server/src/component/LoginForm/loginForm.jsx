import React, { Component } from 'react';
import './loginForm.css'

class LoginForm extends Component {

    // Boilerplate code for a simple login form

    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    // Form handling using this method

    formHandler = (event) => {
        this.setState({[event.target.name] : event.target.value});
    }
    
    // Proxy server was set to http://localhost:5056 to communicate with node server on the back end in the package json
    formSubmit = () => {
        fetch("/loginForm", {
            method: "POST",
            body : JSON.stringify(this.state)
        })
        .then(res => res.json())
        .then(result => {
            /* PERFORM VALIDATION */
        })
        .catch(err => console.log(err));
    }


    // Boilerplate code to render a form to the dom
    render() {
        return (
            <div className="loginForm">
                <form action="/loginSubmitForm" action="POST">
                    <label>Email:</label>
                    <input type="email" name="email" onChange={this.formHandler} value="" />
                    <label>Password:</label>
                    <input type="password" name="password" onChange={this.formHandler} value="" />
                    <button type="submit" onClick={this.formSubmit}>Log In</button>
                </form>
            </div>
        )
    }
}


export default LoginForm;