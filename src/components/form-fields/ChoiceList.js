import React from "react";
import { Field } from "react-final-form";
import Input from "./Input";

const ChoiceList = props => {
  return (
    <div className="boss-choice-list">
      <div className="boss-choice-list__header">
        <h3 className="boss-choice-list__title">{props.title}</h3>
      </div>
      <div className="boss-choice-list__content">
        <p className="boss-choice-list__text">{props.text}</p>
        <div className="boss-choice-list__controls">
          <label className="boss-choice-list__radio-label">
            <Field
              name="radio-1"
              render={() => (
                <Input
                  type="radio"
                  name="employement-status"
                  value="1"
                  className="boss-choice-list__radio-button"
                />
              )}
            />
            <span className="boss-choice-list__radio-label-text">
              I have supplied my P45 from my previous employer
            </span>
          </label>
          <label className="boss-choice-list__radio-label">
            <Field
              name="radio-2"
              render={() => (
                <Input
                  type="radio"
                  name="employement-status"
                  value="2"
                  className="boss-choice-list__radio-button"
                />
              )}
            />
            <span className="boss-choice-list__radio-label-text">
              This is my first job since the 6th of April. I have not been
              receiving taxable jobseekers allowance, Incapacity benefits or a
              state/occupational pernsion
            </span>
          </label>
          <label className="boss-choice-list__radio-label">
            <Field
              name="radio-3"
              render={() => (
                <Input
                  type="radio"
                  name="employement-status"
                  value="3"
                  className="boss-choice-list__radio-button"
                />
              )}
            />
            <span className="boss-choice-list__radio-label-text">
              This is now my only job. Since the 6th of April I have had another
              jobs received taxable jobseekers allowance, Incapacity benefit. I
              don’t receivea state/occupational pension
            </span>
          </label>
          <label className="boss-choice-list__radio-label">
            <Field
              name="radio-4"
              render={() => (
                <Input
                  type="radio"
                  name="employement-status"
                  value="4"
                  className="boss-choice-list__radio-button"
                />
              )}
            />

            <span className="boss-choice-list__radio-label-text">
              I have another job or receive a state/occupational pernsion
            </span>
          </label>
          <label className="boss-choice-list__radio-label">
            <Field
              name="radio-5"
              render={() => (
                <Input
                  type="radio"
                  name="employement-status"
                  value="5"
                  className="boss-choice-list__radio-button"
                />
              )}
            />
            <span className="boss-choice-list__radio-label-text">
              I left a course of higher education before the 6th of April &amp;
              receive my first student loan instalmen on or after the 1st of
              September 1998 &amp; I have not fully repaid my student loan
            </span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default ChoiceList;
