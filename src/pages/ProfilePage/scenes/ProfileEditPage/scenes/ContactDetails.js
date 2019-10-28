import React from "react";

const ContactDetails = props => {
  return (
    <article
      className="boss-content-switcher__chapter  boss-content-switcher__chapter_state_visible"
      data-chapter="contact"
    >
      <header className="boss-content-switcher__header">
        <h2 className="boss-content-switcher__title">Contact Details</h2>
      </header>
      <div className="boss-content-switcher__content"></div>
    </article>
  );
};

export default ContactDetails;
