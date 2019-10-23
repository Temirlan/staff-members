import React from "react";

const Detail = props => {
  return (
    <div class="boss-page-main__isle">
      <section class="boss-details">{props.children}</section>
    </div>
  );
};

export default Detail;
