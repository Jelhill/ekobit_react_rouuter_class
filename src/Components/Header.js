import React from 'react'
import { Link } from "react-router-dom"

export default function Header(props) {
    return (
        <div className="nav">
            <ul>
                <li><Link to="/about">About</Link></li><br/>
                <li><Link to="/contact">Contact us</Link></li><br/>
                <li><Link to="/management">Our Management</Link></li>
            </ul>
            <ul>
                <li><Link to="/customersPosts">Posts</Link></li>
                <li><Link to="">Login</Link></li>
                <li><Link to="/signup">Sign Up</Link></li>
                <li><Link to={`/profile/green`}>Profile</Link></li>
            </ul>
        </div>
    )
}
