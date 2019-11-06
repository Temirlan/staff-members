import React from "react";

const BoardManagerCountRows = props => {
  return props.rows.map(row => {
    return (
      <div className="boss-count boss-count_adjust_row" key={row.id}>
        <div className="boss-count__group">
          <p className="boss-count__number">{row.number}</p>
          <p className="boss-count__label">{row.label}</p>
        </div>
      </div>
    );
  });
};

export default BoardManagerCountRows;
