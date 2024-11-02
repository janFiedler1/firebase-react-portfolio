import React, { useState } from "react";
import '../css/HomeComponent.css'

export default function Home() {

    const skills = ["ReactJS", "NodeJS", "Symfony", "Java", "Python", "C#", "Git", "Jira", "SQL", "DBeaver", "Datadog", "Unity", "AWS", "Linux"];
    const interests = ["Running", "Hiking", "Chess"];

    const socialLinks = [
        {id:1, name: 'linkedin', url: 'https://www.linkedin.com/in/jfiedleruwo/', img: process.env.PUBLIC_URL+"/linkedin2.png"},
        {id:2, name: 'github', url: 'https://github.com/janFiedler1', img: process.env.PUBLIC_URL+"/github2.png"},
        {id:3, name: 'email', url: 'mailto:janfiedler812@gmail.com', img: process.env.PUBLIC_URL+"/gmail2.png"},
        {id:4, name: 'coffee', url: 'https://buymeacoffee.com/janfiedler', img: process.env.PUBLIC_URL+"/buymeacoffee.png"},
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
                <div className="background-separator"s>
                    <div className="intro-container info-container">
                        <h2>About Me</h2>
                        <p>Hey, I'm Jan! Welcome to my webpage.</p>
                        <p>I do freelance web design and software development in a wide range of products including: static web pages, dynamic web applications, server hosting with AWS, desktop applications, and mobile development. Please check out my portfolio and contact me if would like a free consult.</p>
                        <p>I'm a passionate and skilled Full-Stack Developer with a bachelor's degree in Computer Science. I have 2 years of experience in backend and frontend development using Symfony, as well as quality assurance and CI/CD. I also have experience creating frontend static web applications using React, crafting dynamic and user-friendly front-end experiences.</p>
                        <p>In my spare time, I like to go for runs and play video games. I speak 4 languages, and I am casually studying Mandarin as the next one.</p>
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
            </div>
        </React.Fragment>
    )
    
}