import React from "react";
import '../css/SolutionsComponent.css'

export default function Solutions() {
    const solutions = [
        {id:1, name:"Frontend Website Design", img: process.env.PUBLIC_URL+"/naturalinstinct.shop_.png", content: "em ipsum dolor sit amet, consectetur adipiscing elit. Praesent pharetra porta odio eu condimentum. Etiam volutpat sodales mollis. Maecenas quis scelerisque risus. Pellentesque id ornare nisi. Sed id magna sit amet metus vehicula maximus ac sollicitudin elit. Mauris commodo pretium pharetra. Sed porta nibh a tempus lacinia. Nam a nunc lacus. Etiam tempus, enim at consequat pretium, tortor nunc feugiat felis, id ultricies erat nulla sed turpis. Vestibulum sollicitudin odio quis erat dapibus vehicula. Fusce at sapien risus. In at ullamcorper magna, sit amet eleifend tellus. Vestibulum finibus mi sed dolor dictum, at placerat arcu aliquam. Nunc venenatis feugiat vehicula. Vestibulum semper elit ac nisi pharetra, nec condimentum magna ultrices. Quisque in eleifend risus. Pellentesque ipsum neque, pulvinar vel nisi sed, dictum bibendum diam. Quisque semper orci id sollicitudin cursus. Phasellus scelerisque sem id libero tempor, volutpat tristique quam ultricies. Vivamus eget magna justo. Praesent eget auctor sapien. Fusce quis rhoncus augue. Fusce ornare eros ac erat consectetur, eu luctus elit tempor. Sed commodo dui et diam vestibulum luctus. Aliqu"},
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
