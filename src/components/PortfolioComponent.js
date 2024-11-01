import React from "react";
import '../css/PortfolioComponent.css'

const projects = [
    {id: 1, name: "Natural Instinct", url: 'naturalinstinct.shop', img: process.env.PUBLIC_URL+'/naturalinstinct.shop_.png', description: "Natural instinct is a static e-commerce web page using ReactJS and hosted on Firebase"}
]

export default function Portfolio() {
    return(
        <React.Fragment>
            <div className="portfolio-container">
                <h2>Portfolio</h2>
                <span>Expand a project to view more details</span>
                <div className="projects-container">
                    {projects.map((project) => (
                        <a href={project.url} target="_blank">
                            <div className="project-container">
                                <h3>{project.name}</h3>
                                <span>{project.description}</span>
                                <img src={project.img}/>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
            
        </React.Fragment>
    )
    
}
