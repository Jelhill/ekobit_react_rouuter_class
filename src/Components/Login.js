import React, { useState } from 'react'
import { withRouter } from "react-router-dom"

function Login(props) {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const handleLogin = () => {
        const userSignupData = JSON.parse(localStorage.getItem("signUpDetails"))
        if(username === userSignupData.username && password === userSignupData.password) {
            props.history.push("/dashboard")
        }else{
            setError("Username/ password mismatch")
        }
    }
    return (
        <div>
            <div>{!error.length ? null : error}</div>
            <input type="text" placeholder="Enter Username" name="username" onChange={(e) => setUsername(e.target.value)}/><br/>
            <input type="text" placeholder="Enter Password" name="password" onChange={(e) => setPassword(e.target.value)}/><br/>
            <button onClick={handleLogin}>Login</button> 
        </div>
    )
}

export default withRouter(Login)