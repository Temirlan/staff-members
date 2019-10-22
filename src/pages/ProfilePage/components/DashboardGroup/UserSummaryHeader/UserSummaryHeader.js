import React from "react";

const UserSummaryHeader = props => {
  return (
    <div class="boss-user-summary__header">
      <h2 class="boss-user-summary__name">Trulla Collier</h2>
      <span
        class="boss-button boss-button_type_small boss-button_type_no-behavior boss-user-summary__label"
        style={{ backgroundColor: "#f0af84" }}
      >
        Floor Staff
      </span>
    </div>
  );
};

export default UserSummaryHeader;
