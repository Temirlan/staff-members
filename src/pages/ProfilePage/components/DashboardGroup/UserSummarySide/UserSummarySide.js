import React from "react";
import { Link } from "react-router-dom";

const UserSummarySide = props => {
  return (
    <div className="boss-user-summary__side">
      <div className="boss-user-summary__avatar">
        <div className="boss-user-summary__avatar-inner">
          {props.staffMember.avatarUrl && (
            <img
              src={props.staffMember.avatarUrl}
              alt={`${props.firstName} ${props.surname}`}
              className="boss-user-summary__pic"
            />
          )}
        </div>
        <Link
          to="#"
          className="boss-user-summary__avatar-icon boss-user-summary__avatar-icon_role_edit"
        >
          Edit
        </Link>
      </div>
    </div>
  );
};

export default UserSummarySide;
