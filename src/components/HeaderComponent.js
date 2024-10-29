import React from "react";
import '../css/HeaderComponent.css'

export default function Header({navLinks, changeContent}) {
    return (
        <React.Fragment>
            <div className="header">
                <div className="logo-container">
                    <span>Jan Fiedler</span>
                </div>
                <div className="nav-container" role="navigation">
                    {navLinks.map((link) => (
                        <button key={link.id} onClick={() => (changeContent(link.component))} className="nav-button">
                            {link.name}<span className="caret"/>
                        </button>
                    ))}
                </div>
            </div>
        </React.Fragment>
    )
}