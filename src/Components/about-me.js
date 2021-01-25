import React, { useState } from 'react'
import { Row } from 'react-bootstrap'
import "../style/about.css"

const About =() => {

    const Skills = [
        {name:'HTML5', per:"90%" },
        {name:'CSS3', per:"85%" },
        {name:'JavaScript', per:"75%" },
        {name:'Node.js/Express', per:"80%" },
        {name:'Bootstrap', per:"90%" },
        {name:'Data Structures', per:"95%" },
        {name:'Mongo DB', per:"60%" },
        {name:'React js', per:"75%" },
        {name:'Angular', per:"78%" },
        {name:'C++', per:"90%" }
    ]

    return (
        <div id="about">
            <div className="about">
                <div className="container  text-center col-md-6">
                    <h1>GET TO KNOW ME</h1>
                    <p>
                        I am a 3rd year student pursuing Bachelor's of Technology in 
                        Computer Science. I am passionate about my work. Because I love what I do, I have a steady source of motivation that drives me to do my best. I have good listening 
                        and communication skills. I enjoy the process of learning and building stuff.
                        Whenever I am not coding, I like to spend my time playing games.
                    </p>
                </div>
            </div>
            <div className="container skills cardbg">
                <h1 className="col-md-4">Skills</h1>
                <Row className="justify-content-evenly">
                    {Skills.map((skill,index) => (
                        <div className="col-md-5  mt-2 mb-2">
                        <label key={index} className="medium">{skill.name}</label>
                        <div className="progress">
                            <div className="progress-bar progress-bar-striped progress-bar-animated "
                             style={{width:skill.per}} role="progressbar">{skill.per}</div>
                        </div>
                    </div>
                    ))}
                </Row>
            </div>
        </div>
    )
}

export default About;