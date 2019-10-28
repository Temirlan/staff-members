import React from "react";

const PersonalDetails = props => {
  return (
    <article
      className="boss-content-switcher__chapter  boss-content-switcher__chapter_state_visible"
      data-chapter="personal"
    >
      <header className="boss-content-switcher__header">
        <h2 className="boss-content-switcher__title">Personal Details</h2>
      </header>
      <div className="boss-content-switcher__content"></div>
    </article>
  );
};

export default PersonalDetails;
