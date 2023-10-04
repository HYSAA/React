import React from "react";

export default function Contact(props) {
  return (
    <div>
      <div className="contacts">
        <div className="contact-card">
          <img src="./images/mr-whiskerson.png" alt="Mr. Whiskerson" />
          <h3>Mr. Whiskerson</h3>
          <div className="info-group">
            <img src="./images/phone-icon.png" alt="Phone Icon" />
            <p>(212) 555-1234</p>
          </div>
          <div className="info-group">
            <img src="./images/mail-icon.png" alt="Mail Icon" />
            <p>mr.whiskaz@catnap.meow</p>
          </div>
        </div>
      </div>
    </div>
  );
}
