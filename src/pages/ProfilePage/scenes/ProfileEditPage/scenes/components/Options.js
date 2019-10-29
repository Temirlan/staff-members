import React from "react";
import classNames from "classnames";

import * as c from "../../../../../../consts";

class Options extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedId: ""
    };
  }

  handleClick = e => {
    this.props.setSelectionOption(e.target.innerHTML);
    this.setState({
      selectedId: e.target.id
    });
  };

  getSelectOptionClass = selectedId => {
    return classNames("Select-option", {
      "is-focused": selectedId === this.state.selectedId
    });
  };

  render = () => {
    return this.props.options.map(venue => {
      return (
        <div
          id={`${c.SELECT_OPTION}-${venue.id}`}
          className={this.getSelectOptionClass(
            `${c.SELECT_OPTION}-${venue.id}`
          )}
          key={venue.id}
          onClick={this.handleClick}
        >
          {venue.name}
        </div>
      );
    });
  };
}

export default Options;
