import React from "react"
// Challenge: fix the bug, now that we've destructured the props object
export default function Contact({image, name, phone, email}) {

    return (
   
        <div className="contact-card">
            <img src={image}/>
            <h3>{name}</h3>
            <div className="info-group">
                <img src="./images/phone-icon.png" />
                <p>{phone}</p>
            </div>
            <div className="info-group">
                <img src="./images/mail-icon.png"/>
                <p>{email}</p>
            </div>
        </div>
   
      
    )
}
