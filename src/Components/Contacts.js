import React from "react";

export default function Contacts(contact) {
  return (
    <div>
      {/* <span className="uscontacter-id">{contact.id}</span> */}

      <span className="contact-name">{contact.firstName} </span>
      <span className="contact-name">{contact.lastName} </span>
      <br />
      <span className="contact-name">{contact.phone} </span>
      <span className="contact-gender">{contact.gender} </span>
      <span className="contact-gender">{contact.genderPhoto} </span>
    </div>
  );
}
