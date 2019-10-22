import React from "react";

const UserSummarySide = props => {
  return (
    <div class="boss-user-summary__side">
      <div class="boss-user-summary__avatar">
        <div class="boss-user-summary__avatar-inner">
          <img
            src="http://boss-styles.herokuapp.com/images/avatars/user-info_pic.jpg"
            alt="Trulla Collier"
            class="boss-user-summary__pic"
          />
        </div>
        <a
          href="#"
          class="boss-user-summary__avatar-icon boss-user-summary__avatar-icon_role_edit"
        >
          Edit
        </a>
      </div>
    </div>
  );
};

export default UserSummarySide;
