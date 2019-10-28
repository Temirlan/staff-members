import React from "react";
import classNames from "classnames";
import { Form, Field } from "react-final-form";

import ContentSwitcherHeader from "./components/ContentSwitcherHeader";
import Options from "./components/Options";

const SelectControl = props => {
  return (
    <div className="Select-control">
      <span className="Select-multi-value-wrapper" id="react-select-2--value">
        <div className="Select-placeholder">{props.selectOption}</div>
      </span>
      <span className="Select-arrow-zone">
        <span className="Select-arrow"></span>
      </span>
    </div>
  );
};

const SelectMenuOuter = props => {
  return (
    <div className="Select-menu-outer">
      <div role="listbox" className="Select-menu" id="react-select-2--list">
        {props.children}
      </div>
    </div>
  );
};

class EmploymentDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectMainMenue: false,
      selectOption: this.props.staffMember.venue
        ? this.props.staffMember.venue.name
        : ""
    };
  }

  setSelectOption = selectOption => {
    this.setState({
      selectOption
    });
  };

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
          <Form
            onSubmit={() => {}}
            validate={values => {
              const errors = {};
              if (!values.mainVenue) {
                errors.mainVenue = "This is a required field!";
              }
              return errors;
            }}
            render={({ handleSubmit, form, submitting, pristine, values }) => (
              <form onSubmit={handleSubmit}>
                <Field name="mainVenue" component="select">
                  {({ input, meta }) => {
                    return (
                      <div className="boss-form__field">
                        <label
                          htmlFor="select-venue"
                          className="boss-form__label"
                        >
                          <span className="boss-form__label-text">
                            Main Venue
                          </span>
                        </label>
                        <div className="boss-form__select">
                          <div
                            className={this.getSelectClass()}
                            style={
                              this.state.selectMainMenue
                                ? { overflow: "visible" }
                                : { overflow: "hidden" }
                            }
                            onClick={this.handleToggleSelect}
                          >
                            <SelectControl
                              selectOption={this.state.selectOption}
                            />
                            <SelectMenuOuter>
                              <Options
                                venues={this.props.venues}
                                setSelectOption={this.setSelectOption}
                                venue={this.props.staffMember.venue}
                              />
                            </SelectMenuOuter>
                          </div>
                        </div>
                      </div>
                    );
                  }}
                </Field>
              </form>
            )}
          />
        </div>
      </article>
    );
  };
}

export default EmploymentDetails;
