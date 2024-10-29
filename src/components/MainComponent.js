import React from "react";
import '../css/MainComponent.css'

export default function Main({content}) {
    return(
        <React.Fragment>
            <div className="main-container">
                {content}
            </div>
        </React.Fragment>
    )
    
}