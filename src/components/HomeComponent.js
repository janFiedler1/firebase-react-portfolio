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
                    <p>I enjoy thinking and questioning. It's how you get to the root to really learn and understand things in all areas of life. “The more I learn, the less I realize I know”. I'm also a Christian, and in the area of work, I believe that work was designed as a good thing, both for others and ourselves. I'm a self-taught software developer living in Windsor, Ontario, Canada and a big fan of all-things javascript (although I do know it's weird at times...) I love computer science because of the ability you gain to be able to see an idea (applicable to any field) through, from start to finish. Check out some of my work and experience.</p>
                    <p>I'm also passionate about music and other ideas 😃</p>
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