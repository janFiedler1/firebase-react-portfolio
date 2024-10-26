import React from "react";
import '../css/HeaderComponent.css'

export default function Header() {
    const navLinks = [
        {id:1, name:'Home', url:'./'},
        {id:2, name:'Solutions', url:'./'},
        {id:3, name:'Portfolio', url:'./'},
        {id:4, name:'Contact', url:'./'}
    ]
    return (
        <React.Fragment>
            <div className="header">
                <div className="logo-container">
                    <span>Jan Fiedler</span>
                </div>
                <div className="nav-container" role="navigation">
                    {navLinks.map((link) => (
                        <button key={link.id} onClick={() => (0)} className="nav-button">
                            {link.name}<span className="caret"/>
                        </button>
                    ))}
                </div>
            </div>
        </React.Fragment>
    )
}