import React from "react";
import '../css/PortfolioComponent.css'

const projects = [
    {id: 1, name: "Natural Instinct", url: 'https://naturalinstinct.shop', img: process.env.PUBLIC_URL+'/naturalinstinct.shop_.png', description: "Natural instinct is a static e-commerce web page using ReactJS and hosted on Firebase"},
    {id: 2, name: "Chess JS", url: 'https://janfiedler1.github.io/chess-js/', img: process.env.PUBLIC_URL+'/chess.png', description: "Chess JS is a playable chess board written in vanila Javascript"},
]

export default function Portfolio() {
    return(
        <React.Fragment>
            <div className="portfolio-container">
                <h2>Portfolio</h2>
                <span className="portfolio-description">Click on a project to see live view</span>
                <div className="projects-container">
                    {projects.map((project) => (
                        <a href={project.url} target="_blank">
                            <div className="project-container">
                                <h3>{project.name}</h3>
                                <span className="project-description">{project.description}</span>
                                <img src={project.img}/>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
            
        </React.Fragment>
    )
    
}
