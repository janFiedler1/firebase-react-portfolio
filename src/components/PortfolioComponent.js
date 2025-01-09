import React from "react";
import '../css/PortfolioComponent.css'

const projects = [
    {id: 1, name: "Natural Instinct", url: 'https://naturalinstinct.shop', img: process.env.PUBLIC_URL+'/naturalinstinct.shop_.png', description: "Natural instinct is a static e-commerce web page using ReactJS and hosted on Firebase."},
    {id: 2, name: "Chess JS", url: 'https://janfiedler1.github.io/chess-js/', img: process.env.PUBLIC_URL+'/chess.png', description: "Chess JS is a playable chess board written in vanila Javascript. The board and pieces are displayed using simple html and css."},
    {id: 2, name: "PLC Monitoring Interface", url: 'https://github.com/janFiedler1/python-PLC-interface/', img: process.env.PUBLIC_URL+'/controlx-gui.png', description: "A PyQt5 based interface that connects to a Beckhoff or Allen-Bradley PLC and a Mariadb database, and displays real time or historical data, as well as saving data to the database. The graphs and data capture rate are customizable."},
    {id: 2, name: "Database CSV Exporter Tool", url: 'https://github.com/janFiedler1/controlx-csv-exporter/', img: process.env.PUBLIC_URL+'/controlx-exporter.png', description: "A simple stand-alone tool that connects to a database and exports data as a CSV. Made to handle large data exports"},
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
