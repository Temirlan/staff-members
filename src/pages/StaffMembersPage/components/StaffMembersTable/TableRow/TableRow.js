import React from "react";
import { Link } from "react-router-dom";
import TableTextCell from "../TableTextCell/TableTextCell";
import Button from "../../../../../components/Button/Button";

const TableRow = props => {
  const { id, staffType, fullName, venue, status } = props.staffMember;

  const setStatusByClass = status => {
    let classes =
      "boss-button boss-button_type_small boss-button_type_no-behavior";

    return status === "enabled"
      ? `${classes} boss-button_role_enabled`
      : `${classes} boss-button_role_disabled`;
  };

  const renderTableImageCell = () => {
    return React.cloneElement(props.renderTableImageCell());
  };

  return (
    <div className="boss-table__row">
      {renderTableImageCell()}
      <TableTextCell>
        <p className="boss-table__label">Name</p>
        <p className="boss-table__text">
          <Link
            to={`/staff_members/${id}/profile`}
            className="boss-table__link"
          >
            {fullName}
          </Link>
        </p>
      </TableTextCell>
      <TableTextCell>
        <p className="boss-table__label">Status</p>
        <p className="boss-table__text">
          <Button className={setStatusByClass(status)}>{status}</Button>
        </p>
      </TableTextCell>
      <TableTextCell>
        <p className="boss-table__label">Type</p>
        <p className="boss-table__text">
          <Link to="#" className="boss-table__link">
            {staffType.name}
          </Link>
        </p>
      </TableTextCell>
      <TableTextCell>
        <p className="boss-table__label">Master Venue</p>
        <p className="boss-table__text">
          <Link to="#" className="boss-table__link">
            {venue.name}
          </Link>
        </p>
      </TableTextCell>
    </div>
  );
};

export default TableRow;
