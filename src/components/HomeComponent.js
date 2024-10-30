import React, { useState } from "react";
import '../css/HomeComponent.css'

export default function Home() {

    const socialLinks = [
        {id:1, name: 'linkedin', url: 'https://www.linkedin.com/in/jfiedleruwo/', img: process.env.PUBLIC_URL+"/linkedin_48.png"},
        {id:2, name: 'github', url: 'https://github.com/janFiedler1', img: process.env.PUBLIC_URL+"/github_white.png"},
        {id:3, name: 'email', url: 'mailto:janfiedler812@gmail.com', img: process.env.PUBLIC_URL+"/email_48.png"},
    ]
    const profilePics = ["/profile_square.jpg","/profile2.png","/profile3.jpg","/profile4.jpg",]
    const [profileImage, setProfileImage] = useState(profilePics[0]);
    const [profileIndex, setProfileIndex] = useState(1);
    const incrementProfileIndex = () => {
        setProfileIndex((profileIndex+1)%profilePics.length);
    }
    const changeOnProfileClick = () => {
        incrementProfileIndex();
        setProfileImage(process.env.PUBLIC_URL+profilePics[profileIndex]);
    }
    return(
        <React.Fragment>
            <div className="home-container">
                {/* <div className="home-row-1"> */}
                <div className="profile-container">
                    <img className='profile-img' src={profileImage} onClick={changeOnProfileClick}/>
                    <span className="profile-name"><b>Jan</b> Fiedler</span>
                    <span className="profile-location">Hamilton, ON, Canada</span>
                    <div className="social-links">
                        {socialLinks.map((link) => (
                            <div className="social-links-img-container">
                                <a href={link.url}>
                                    <img src={link.img} className="social-links-img"/>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="intro-container"></div>
                {/* </div> */}
                <div className="skills-container"></div>
                <div className="interests-container"></div>
            </div>
        </React.Fragment>
    )
    
}