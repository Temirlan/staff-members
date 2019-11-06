import React from "react";

const BoardMain = props => {
  return (
    <div className="boss-board__main">
      <div className="boss-board__manager">{props.children}</div>
    </div>
  );
};

export default BoardMain;
