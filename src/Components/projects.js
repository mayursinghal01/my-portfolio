import React from 'react'
import { Badge } from 'react-bootstrap'
import { Icon } from 'semantic-ui-react'


const Projects = () => {

    const proj = [
        {
            title:"Leader Board",
            description:"A single page web application. In this application user can add a player, delete a player and can change player's score.",
            icons:["angular","html5","css3"],
            gitlink:"https://github.com/mayursinghal01/leadboard-angular-"
        },
        {
            title:"Recipe Book",
            description:"User can perform CRUD operations and can see and order the ingredients of recipes.",
            icons:["angular","html5","css3"],
            gitlink:"https://github.com/mayursinghal01/recipe-book"
        },
        {
            title:"Chat-app",
            description:"A simple chat application, it is a real-time chat application using socket.io in node.js.",
            icons:["node js","js","html5","css3"],
            gitlink:"https://github.com/mayursinghal01/Simple-chat-app"
        },
        {
            title:"Task Manager",
            description:"A web application where one can keep a track of their pending tasks, write down the task and mark it done when completed.",
            icons:["react","js"],
            gitlink:"https://github.com/mayursinghal01/task-manager"
        },
        {
            title:"E-commerce website",
            description:"E-commerce website built using MERN stack.",
            icons:["react","js","node js","mongoDB"],
            gitlink:"https://github.com/mayursinghal01/E-commerce--MERN"
        },
        {
            title:"Photo Gallery",
            description:"Simple Photo Gallery Using Grid ",
            icons:["html5","css3"],
            gitlink:"https://github.com/mayursinghal01/port"
        }
    ]

    return (
        <div className="projects container-fluid" id="project">
            <h1 className="heade text-center mb-5 mt-4">
                Projects
            </h1>
            <div className="container">
                <div className="row">
                    {proj.map((project,index) => (
                        <div className="col-md-6" key={index}>
                            <div className="card">
                                
                                <div className="card-body">
                                    <h3 className="card-title">{project.title}</h3>
                                    <p className="card-text">{project.description}</p>
                                    {project.icons.map((icon,i) => (
                                        <Badge key={i}> <Icon name={icon} size="big" />
                                            {icon}
                                        </Badge>
                                    ))}
                                    <Badge > 
                                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="currentColor" className="bi bi-bootstrap-fill" viewBox="0 0 16 16">
                                            <path d="M6.375 7.125V4.658h1.78c.973 0 1.542.457 1.542 1.237 0 .802-.604 1.23-1.764 1.23H6.375zm0 3.762h1.898c1.184 0 1.81-.48 1.81-1.377 0-.885-.65-1.348-1.886-1.348H6.375v2.725z"/>
                                            <path d="M4.002 0a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4h-8zm1.06 12V3.545h3.399c1.587 0 2.543.809 2.543 2.11 0 .884-.65 1.675-1.483 1.816v.1c1.143.117 1.904.931 1.904 2.033 0 1.488-1.084 2.396-2.888 2.396H5.062z"/>
                                        </svg> Bootstrap 4
                                    </Badge>
                                    <br/>
                                    <br/>
                                    <a href={project.gitlink} className="bt">
                                        <button>
                                            <Icon name='code branch' /> Source Code
                                        </button>
                                    </a>
                                </div>
                                
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Projects;