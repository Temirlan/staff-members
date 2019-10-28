import React from "react";
import classNames from "classnames";

import ContentSwitcherHeader from "./components/ContentSwitcherHeader";

class EmploymentDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectMainMenue: false
    };
  }

  getSelectClass = () => {
    return classNames("Select", "Select--single", {
      "is-focused is-open": this.state.selectMainMenue
    });
  };

  handleToggleSelect = () => {
    this.setState(state => {
      return {
        selectMainMenue: !state.selectMainMenue
      };
    });
  };

  render = () => {
    return (
      <article
        className="boss-content-switcher__chapter boss-content-switcher__chapter_state_visible"
        data-chapter="employment"
      >
        <ContentSwitcherHeader title="Employment Details" />

        <div className="boss-content-switcher__content">
          <form className="boss-form boss-form_page_profile-edit">
            <div className="boss-form__field">
              <label htmlFor="select-venue" className="boss-form__label">
                <span className="boss-form__label-text">Main Venue</span>
              </label>
              <div className="boss-form__select boss-form__select_state_error">
                <div
                  className={this.getSelectClass()}
                  style={
                    this.state.selectMainMenue
                      ? { overflow: "visible" }
                      : { overflow: "hidden" }
                  }
                  onClick={this.handleToggleSelect}
                >
                  <div className="Select-control">
                    <span
                      className="Select-multi-value-wrapper"
                      id="react-select-2--value"
                    >
                      <div className="Select-placeholder">Option</div>
                    </span>
                    <span className="Select-arrow-zone">
                      <span className="Select-arrow"></span>
                    </span>
                  </div>
                  <div className="Select-menu-outer">
                    <div
                      role="listbox"
                      className="Select-menu"
                      id="react-select-2--list"
                    >
                      <div className="Select-option is-focused">Option</div>
                      <div className="Select-option">Option</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="boss-form__error">
                <p className="boss-form__error-text">
                  <span className="boss-form__error-line">
                    This is a required field!
                  </span>
                </p>
              </div>
            </div>
          </form>
        </div>
      </article>
    );
  };
}

export default EmploymentDetails;
