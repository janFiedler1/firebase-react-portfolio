import React, { useState } from "react";
import "../css/ContactComponent.css"

export default function Contact() {
    const [result, setResult] = useState("");
  
    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "a4c09e93-c35d-4753-bf38-3621cac6f43d");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  
    return (
      <React.Fragment>
        <div className="contact-form">
            <h2>Contact Me</h2>
            <p>Fill out the form below with any questions or inquiries, and I will get back to you as soon as possible</p>
            <form onSubmit={onSubmit}>
                {/* <label htmlFor="name">Name</label> */}
                <input type="text" name="name" placeholder="Name" required/>
                {/* <label htmlFor="email">Email</label> */}
                <input type="email" name="email" placeholder="Email" required/>
                {/* <label htmlFor="message">Message</label> */}
                <textarea name="message" placeholder="Message" required></textarea>

                <button type="submit">Submit</button>

            </form>
          <span>{result}</span>
        </div>
      </React.Fragment>
    );
  }