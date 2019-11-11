import React from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";

const TableCell = props => {
  const { label, text, creates, actions, id } = props;

  return (
    <div className="boss-table__info" key={id}>
      <p className="boss-table__label">{label}</p>
      {text && (
        <p
          className={classnames("boss-table__text", {
            "boss-table__text_role_pending-status": text === "PENDING",
            "boss-table__text_role_success-status": text === "ACCEPTED",
            "boss-table__text_role_alert-status": text === "REJECTED"
          })}
        >
          {text}
        </p>
      )}
      {creates && (
        <div className="boss-table__info-group">
          {creates.map(create => {
            return (
              <p
                key={create.id}
                className={classnames("boss-table__text", {
                  "boss-table__text_align_center": !create.status
                })}
              >
                <span className="boss-table__text-line">
                  {create.status && (
                    <span className="boss-table__text-label">
                      {`${create.status}: `}
                    </span>
                  )}

                  {create.name}
                </span>
                <span className="boss-table__text-meta">
                  ({create.created})
                </span>
              </p>
            );
          })}
        </div>
      )}
      {actions && (
        <div className="boss-table__actions">
          <Link
            to="#"
            className="boss-button boss-button_type_small boss-button_role_update boss-table__action"
          >
            Edit
          </Link>
          <Link
            to="#"
            className="boss-button boss-button_type_small boss-button_role_cancel boss-table__action"
          >
            Delete
          </Link>
        </div>
      )}
    </div>
  );
};

export default TableCell;
