import React from "react";
import '../css/SolutionsComponent.css'

export default function Solutions() {
    const solutions = [
        {id:1, name:"Frontend Website Design", img: process.env.PUBLIC_URL+"/naturalinstinct.shop_.png", content: `At [Your Company Name], we specialize in crafting visually appealing and user-friendly frontend designs that captivate your audience. Our team of skilled designers and developers is dedicated to transforming your ideas into stunning digital experiences.

We understand that a well-designed website is crucial for your business's success. That's why we focus on creating websites that are not only visually striking but also highly functional and optimized for user experience. Our designs are tailored to your specific needs and brand identity, ensuring that your website stands out from the competition.

From simple landing pages to complex web applications, we have the expertise to handle projects of all sizes. Our services include:

UI/UX Design: Creating intuitive and engaging user interfaces
Responsive Design: Ensuring your website looks great on all devices
Front-End Development: Building pixel-perfect websites with HTML, CSS, and JavaScript
E-commerce Development: Designing and developing online stores
Web Accessibility: Making your website accessible to everyone
Let us help you create a website that leaves a lasting impression. Contact us today to discuss your project.
`},
        {id:2, name:"Server Hosting", img: process.env.PUBLIC_URL+"/aws.png", content: "em ipsum dolor sit amet, consectetur adipiscing elit. Praesent pharetra porta odio eu condimentum. Etiam volutpat sodales mollis. Maecenas quis scelerisque risus. Pellentesque id ornare nisi. Sed id magna sit amet metus vehicula maximus ac sollicitudin elit. Mauris commodo pretium pharetra. Sed porta nibh a tempus lacinia. Nam a nunc lacus. Etiam tempus, enim at consequat pretium, tortor nunc feugiat felis, id ultricies erat nulla sed turpis. Vestibulum sollicitudin odio quis erat dapibus vehicula. Fusce at sapien risus. In at ullamcorper magna, sit amet eleifend tellus. Vestibulum finibus mi sed dolor dictum, at placerat arcu aliquam. Nunc venenatis feugiat vehicula. Vestibulum semper elit ac nisi pharetra, nec condimentum magna ultrices. Quisque in eleifend risus. Pellentesque ipsum neque, pulvinar vel nisi sed, dictum bibendum diam. Quisque semper orci id sollicitudin cursus. Phasellus scelerisque sem id libero tempor, volutpat tristique quam ultricies. Vivamus eget magna justo. Praesent eget auctor sapien. Fusce quis rhoncus augue. Fusce ornare eros ac erat consectetur, eu luctus elit tempor. Sed commodo dui et diam vestibulum luctus. Aliqu"},
        {id:3, name:"Desktop Applications, and More...", img: process.env.PUBLIC_URL+"/profile2.png", content: "em ipsum dolor sit amet, consectetur adipiscing elit. Praesent pharetra porta odio eu condimentum. Etiam volutpat sodales mollis. Maecenas quis scelerisque risus. Pellentesque id ornare nisi. Sed id magna sit amet metus vehicula maximus ac sollicitudin elit. Mauris commodo pretium pharetra. Sed porta nibh a tempus lacinia. Nam a nunc lacus. Etiam tempus, enim at consequat pretium, tortor nunc feugiat felis, id ultricies erat nulla sed turpis. Vestibulum sollicitudin odio quis erat dapibus vehicula. Fusce at sapien risus. In at ullamcorper magna, sit amet eleifend tellus. Vestibulum finibus mi sed dolor dictum, at placerat arcu aliquam. Nunc venenatis feugiat vehicula. Vestibulum semper elit ac nisi pharetra, nec condimentum magna ultrices. Quisque in eleifend risus. Pellentesque ipsum neque, pulvinar vel nisi sed, dictum bibendum diam. Quisque semper orci id sollicitudin cursus. Phasellus scelerisque sem id libero tempor, volutpat tristique quam ultricies. Vivamus eget magna justo. Praesent eget auctor sapien. Fusce quis rhoncus augue. Fusce ornare eros ac erat consectetur, eu luctus elit tempor. Sed commodo dui et diam vestibulum luctus. Aliqu"}
    ]
    return(
        <React.Fragment>
            <div className="solutions-container">
                {solutions.map((solution) => (
                    <div className="solution-section">
                        <h2>{solution.name}</h2>
                        <p><img src={solution.img}/>{solution.content}</p>
                    </div>
                ))}
                {/* {solutions.map((solution) => (
                    <div className="solution-section">
                        <div className="solution-image-container">
                            <img src={solution.img}/>
                        </div>
                        <div className="solution-section-wording">
                            <h2>{solution.name}</h2>
                            <p>{solution.content}</p>
                        </div>
                    </div>
                ))} */}
                {/* 
                <div className="solution-section">
                    <div className="solution-image-container">
                        <a href="naturalinstinct.shop">
                            <img src={process.env.PUBLIC_URL+"/naturalinstinct.shop_.png"}/>
                        </a>
                    </div>
                    <div className="solution-section-wording">
                        <h2>Frontend Website Design</h2>
                        <p>em ipsum dolor sit amet, consectetur adipiscing elit. Praesent pharetra porta odio eu condimentum. Etiam volutpat sodales mollis. Maecenas quis scelerisque risus. Pellentesque id ornare nisi. Sed id magna sit amet metus vehicula maximus ac sollicitudin elit. Mauris commodo pretium pharetra. Sed porta nibh a tempus lacinia. Nam a nunc lacus. Etiam tempus, enim at consequat pretium, tortor nunc feugiat felis, id ultricies erat nulla sed turpis. Vestibulum sollicitudin odio quis erat dapibus vehicula. Fusce at sapien risus. In at ullamcorper magna, sit amet eleifend tellus. Vestibulum finibus mi sed dolor dictum, at placerat arcu aliquam. Nunc venenatis feugiat vehicula. Vestibulum semper elit ac nisi pharetra, nec condimentum magna ultrices. Quisque in eleifend risus. Pellentesque ipsum neque, pulvinar vel nisi sed, dictum bibendum diam. Quisque semper orci id sollicitudin cursus. Phasellus scelerisque sem id libero tempor, volutpat tristique quam ultricies. Vivamus eget magna justo. Praesent eget auctor sapien. Fusce quis rhoncus augue. Fusce ornare eros ac erat consectetur, eu luctus elit tempor. Sed commodo dui et diam vestibulum luctus. Aliqu</p>
                    </div>
                </div>*/}
            </div>
        </React.Fragment>
    )
    
}
