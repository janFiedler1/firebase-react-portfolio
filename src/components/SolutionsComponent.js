import React from "react";
import '../css/SolutionsComponent.css'

export default function Solutions() {
    const solutions = [
        {id:1, 
        name:"Frontend Website Design", 
        img: process.env.PUBLIC_URL+"/naturalinstinct.shop_.png", 
        content: <div>
        <p>I use ReactJS, a leading JavaScript library, to create dynamic and interactive user interfaces with unparalleled efficiency. When combined with the power and scalability of AWS, you get a winning combination: fast load times, enhanced user experience, and rock-solid reliability.</p>
        <p>My expertly crafted static web pages leverage the strengths of ReactJS to deliver smooth, engaging experiences for your visitors. Hosted on AWS S3, your website benefits from global reach, high availability, and robust security, ensuring your online presence is always accessible and protected.</p>
&#10;
Key Benefits:
<ul>
&#9;<li>High Performance: Experience lightning-fast load times thanks to optimized React components and the power of AWS's global infrastructure.</li>
&#9;<li>Enhanced User Experience: Deliver smooth, interactive, and visually appealing websites that captivate your audience.</li>
&#9;<li>Robust and Scalable: AWS provides a secure and scalable foundation, ensuring your website can handle traffic surges and grow with your business.</li>
&#9;<li>Cost-Effective: Enjoy the benefits of a powerful cloud platform without breaking the bank.</li>
</ul>
</div>
        },
        {id:2, 
        name:"Server Hosting", 
        img: process.env.PUBLIC_URL+"/aws.png", 
        content:
            <div>
            <p>
            I use NodeJS and AWS to build scalable and reliable back-end applications. I use EC2 for flexible and cost-effective virtual servers, allowing me to easily scale resources up or down based on demand. AWS Lambda can also be used for scalable applications as a more cost effective solution. For sites requiring a database, I use RDS, which also offers scalability and cost-effectiveness. Finally, the frontend uses the same AWS S3 service, meaning static websites can have backend functioanlity added after launch.
            </p>
            </div>
        },
        {id:3, 
        name:"Desktop Applications, and More...", 
        img: process.env.PUBLIC_URL+"/profile2.png", 
        content: 
        <div>
        <p>
        I have a wide array of other skills to create many other software solutions that fit your needs. I can create desktop applications, mobile apps, web apps, and more. I have experience in creating PLC interfaces, game development, and web-app testing.
        </p>
        </div>
        }
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
            </div>
        </React.Fragment>
    )
    
}
