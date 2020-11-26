import React, { Component } from 'react'

export default class Signup extends Component {

    constructor(props) {
        super()
        this.state = {
            userDetails: {}, 
            name: "",
            username: "",
            password: ""

        }
        // this.getUserDetails = this.getUserDetails.bind(this)
    }

    getUserDetails = (e) => {
        const userDetails = {...this.state.userDetails, [e.target.name]: e.target.value}
        this.setState({
            userDetails
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        localStorage.setItem("signUpDetails", JSON.stringify(this.state.userDetails))
    }
    render() {
        console.log("UserDetails", this.state.userDetails)
        return (
            <div>
                <input type="text" placeholder="Enter Name" name="names" onChange={this.getUserDetails}/><br/>
                <input type="text" placeholder="Enter Username" name="username" onChange={this.getUserDetails}/><br/>
                <input type="text" placeholder="Enter Password" name="password" onChange={this.getUserDetails}/><br/>
                <button onClick={this.handleSubmit}>Sign Up</button>
            </div>
        )
    }
}
