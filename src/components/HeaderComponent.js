import {useState, Fragment} from "react";
import '../css/HeaderComponent.css'
import { useParams } from "react-router-dom";

export default function Header({navLinks, changeContent, router}) {

    const [displayNone, setDisplay] = useState("");
    const display = () => {
        console.log("click works: "+display == "" ? " display-none" : "");
        setDisplay(displayNone == "" ? " display-none" : "")
        return displayNone;
    }

    const [translation, translate] = useState("");
    const move = () => {
        translate(translation == "" ? " translate" : "")
        return translation;
    }

    return (
        <Fragment>
            <span onClick={display}>disappear</span>
            <span onClick={move}>move</span>
            <div id="header" className={"header"+displayNone+translation}>
                <a href="/">
                    <div className="logo-container">
                        <span>JF</span>
                    </div>
                </a>
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
        </Fragment>
    )
}