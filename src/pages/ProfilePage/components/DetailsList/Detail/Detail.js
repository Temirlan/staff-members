import React from "react";

const Detail = props => {
  return (
    <div className="boss-page-main__isle">
      <section className="boss-details">{props.children}</section>
    </div>
  );
};

export default Detail;
