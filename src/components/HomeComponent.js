import React, { useState } from "react";
import '../css/HomeComponent.css'

export default function Home() {

    const skills = ["ReactJS", "NodeJS", "Symfony", "Java", "Python", "C#", "Git", "Jira", "SQL", "DBeaver", "Datadog", "Unity", "AWS", "Linux"];
    const interests = ["Running", "Hiking", "Chess"];

    const socialLinks = [
        {id:1, name: 'linkedin', url: 'https://www.linkedin.com/in/jfiedleruwo/', img: process.env.PUBLIC_URL+"/linkedin2.png"},
        {id:2, name: 'github', url: 'https://github.com/janFiedler1', img: process.env.PUBLIC_URL+"/github2.png"},
        {id:3, name: 'email', url: 'mailto:janfiedler812@gmail.com', img: process.env.PUBLIC_URL+"/gmail2.png"},
    ]
    const profilePics = ["/profile_square.jpg","/profile2.png","/profile3.png","/profile4.png",]
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
                    <span className="profile-name">Jan Fiedler</span>
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
                <div className="intro-container info-container">
                    <h2>About Me</h2>
                    <p>Hey, I'm Jan! Welcome to my webpage.</p>
                    <p>I'm a passionate and skilled Full-Stack Developer with a bachelor's degree in Computer Science. With over two years of experience in Symfony, I've honed my abilities in building robust and scalable web applications. My expertise extends to React, enabling me to craft dynamic and user-friendly front-end experiences.</p>
                    <p>em ipsum dolor sit amet, consectetur adipiscing elit. Praesent pharetra porta odio eu condimentum. Etiam volutpat sodales mollis. Maecenas quis scelerisque risus. Pellentesque id ornare nisi. Sed id magna sit amet metus vehicula maximus ac sollicitudin elit. Mauris commodo pretium pharetra. Sed porta nibh a tempus lacinia. Nam a nunc lacus. Etiam tempus, enim at consequat pretium, tortor nunc feugiat felis, id ultricies erat nulla sed turpis. Vestibulum sollicitudin odio quis erat dapibus vehicula. Fusce at sapien risus. In at ullamcorper magna, sit amet eleifend tellus. Vestibulum finibus mi sed dolor dictum, at placerat arcu aliquam. Nunc venenatis feugiat vehicula. Vestibulum semper elit ac nisi pharetra, nec condimentum magna ultrices. Quisque in eleifend risus. Pellentesque ipsum neque, pulvinar vel nisi sed, dictum bibendum diam. Quisque semper orci id sollicitudin cursus. Phasellus scelerisque sem id libero tempor, volutpat tristique quam ultricies. Vivamus eget magna justo. Praesent eget auctor sapien. Fusce quis rhoncus augue. Fusce ornare eros ac erat consectetur, eu luctus elit tempor. Sed commodo dui et diam vestibulum luctus. Aliqu</p>
                </div>
                {/* </div> */}
                <div className="row">
                    <div className="skills-container info-container">
                        <h2>Skills</h2>
                        <div className="skill-container">
                            {skills.map((skill) => (
                                <span>{skill}</span>
                            ))}
                        </div>
                    </div>
                    <div className="interests-container info-container">
                        <h2>Interests</h2>
                        <div className="skill-container">
                            {interests.map((skill) => (
                                <span>{skill}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
    
}