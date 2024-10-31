import React from "react";
import '../css/HeaderComponent.css'
import { useParams } from "react-router-dom";

export default function Header({navLinks, changeContent, router}) {
    return (
        <React.Fragment>
            <div className="header">
                <div className="logo-container">
                    <span>JF</span>
                </div>
                <div className="nav-container" role="navigation">
                    {/* {navLinks.map((link) => ( */}
                    {navLinks.map((link) => (
                        // <button key={link.id} onClick={() => (changeContent(link.component))} className="nav-button">
                        <a href={link.url}>
                            <div className="nav-button-container">
                                <button key={link.id} className="nav-button">
                                    {link.name}<span className="caret"/>
                                </button>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </React.Fragment>
    )
}