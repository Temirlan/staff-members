import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const TableImageCell = props => {
  return (
    <div className="boss-table__cell">
      <div className="boss-table__image">
        <Link
          to={`/staff_members/${props.id}`}
          href="#"
          className="boss-table__link"
        >
          <div className="boss-avatar boss-avatar_type_combined boss-avatar_type_scannable">
            {props.avatarUrl && (
              <img
                src={props.avatarUrl}
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

TableImageCell.propTypes = {
  id: PropTypes.number,
  avatarUrl: PropTypes.string
};

export default TableImageCell;
