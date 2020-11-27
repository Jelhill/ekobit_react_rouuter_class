import React from 'react'
import { connect } from 'react-redux'

function About() {
    return (
        <div>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            <p>Voluptatem consequatur nemo voluptas minus? Molestiae numquam, doloremque nihil culpa accusantium pariatur porro blanditiis, minima eveniet dolor dolorem iure rerum neque voluptate!</p>
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log("About State", state)
    return {

    }
}

export default connect(mapStateToProps)(About)