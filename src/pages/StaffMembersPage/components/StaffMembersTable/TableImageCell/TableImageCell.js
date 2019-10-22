import React from "react";
import { Link } from "react-router-dom";

const TableImageCell = props => {
  return (
    <div className="boss-table__cell">
      <div className="boss-table__image">
        <Link
          to={`/staff_members/${props.staffMember.id}`}
          href="#"
          className="boss-table__link"
        >
          <div className="boss-avatar boss-avatar_type_combined boss-avatar_type_scannable">
            {props.staffMember.avatarUrl && (
              <img
                src={props.staffMember.avatarUrl}
                className="boss-avatar__image"
                alt="avatar"
              />
            )}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default TableImageCell;
