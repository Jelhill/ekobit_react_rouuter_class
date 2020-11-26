import React from 'react'
import { useParams } from "react-router-dom"

export default function Profile() {
    console.log("useparams", useParams())
    const { color } = useParams()
    console.log("Col", color);
    return (
        <div className="profileDiv" style={{backgroundColor: color}}>
            <h1>This is our profile</h1>
        </div>
    )
}
