import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Link } from "react-router-dom";

import TableTextCell from "./TableTextCell";
import Button from "../../../components/Button/Button";
import TableImageCell from "./TableImageCell";

const TableRow = props => {
  const {
    id,
    staffType,
    fullName,
    venue,
    status,
    avatarUrl
  } = props.staffMember;

  const statusClass = classNames(
    "boss-button",
    "boss-button_type_small",
    "boss-button_type_no-behavior",
    {
      "boss-button_role_enabled": status === "enabled",
      "boss-button_role_disabled": status === "disabled"
    }
  );

  return (
    <div className="boss-table__row">
      <TableImageCell avatarUrl={avatarUrl} id={id} />

      <TableTextCell label="Name">
        <Link to={`/staff_members/${id}`} className="boss-table__link">
          {fullName}
        </Link>
      </TableTextCell>

      <TableTextCell label="Status">
        <Button className={statusClass}>{status}</Button>
      </TableTextCell>

      <TableTextCell label="Type">
        <Link to="#" className="boss-table__link">
          {staffType.name}
        </Link>
      </TableTextCell>

      <TableTextCell label="Master Venue">
        <Link to="#" className="boss-table__link">
          {venue.name}
        </Link>
      </TableTextCell>
    </div>
  );
};

TableRow.propTypes = {
  staffMember: PropTypes.object
};

export default TableRow;
