import React from "react"

export default function Contact(props) {
    /**
     * Challenge: Fix the code below to use the `props`
     * object values in place of the hardcoded values below
     */
    return (
      <props>
        <div className="contact-card">
            <img src="./images/mr-whiskerson.png"/>
            <h3>{props.name}</h3>
            <div className="info-group">
                <img src="./images/phone-icon.png" />
                <p>{props.phone}</p>
            </div>
            <div className="info-group">
                <img src="./images/mail-icon.png" />
                <p>{props.email}</p>
            </div>
        </div>
        </props>
    )
}
