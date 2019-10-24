import React from "react";

import DetailSubjectsItem from "./DetailsList/DetailSubjectsItem/DetailSubjectsItem";

const Detail = props => {
  return (
    <div className="boss-page-main__isle">
      <section className="boss-details">{props.children}</section>
    </div>
  );
};

const DetailPointer = props => {
  return (
    <p className="boss-details__pointer">
      <span className="boss-details__pointer-text">{props.number}</span>
    </p>
  );
};

const DetailContent = props => {
  return <div className="boss-details__content">{props.children}</div>;
};

const DetailSubjects = props => {
  return <ul className="boss-details__list">{props.children}</ul>;
};

const DetailsList = props => {
  return (
    <>
      {props.staffMember.venue && props.staffMember.payRate && (
        <>
          <Detail>
            <DetailPointer number="1" />
            <DetailContent>
              <h3 className="boss-details__title">Employment Details</h3>
              <DetailSubjects>
                <DetailSubjectsItem
                  label="Main Venue"
                  value={props.staffMember.venue.name}
                />
                <DetailSubjectsItem
                  label="Other Venues"
                  value={
                    props.staffMember.otherVenues
                      ? props.staffMember.otherVenues
                      : "N / A"
                  }
                />
                <DetailSubjectsItem
                  label="Start Date"
                  value={props.staffMember.startsAt}
                />
                <DetailSubjectsItem
                  label="Pay Rate"
                  value={props.staffMember.payRate.name}
                />
                <DetailSubjectsItem
                  label="Hour Preference"
                  value={props.staffMember.hoursPreferenceNote}
                />
                <DetailSubjectsItem
                  label="Day Preference"
                  value={props.staffMember.dayPreferenceNote}
                />
                <DetailSubjectsItem
                  label="National Insurance Number"
                  value={props.staffMember.nationalInsuranceNumber}
                />
                <DetailSubjectsItem
                  label="Sage ID"
                  value={
                    props.staffMember.sageId
                      ? props.staffMember.sageId
                      : "N / A"
                  }
                />
                <DetailSubjectsItem
                  label="Status Statement"
                  value={props.staffMember.statusStatement}
                />
              </DetailSubjects>
            </DetailContent>
          </Detail>
          <Detail>
            <DetailPointer number="2" />
            <DetailContent>
              <h3 className="boss-details__title">Account Details</h3>
              <DetailSubjects>
                <DetailSubjectsItem
                  label="Created"
                  value={props.staffMember.createdAt}
                />
              </DetailSubjects>
            </DetailContent>
          </Detail>
          <Detail>
            <DetailPointer number="3" />
            <DetailContent>
              <h3 className="boss-details__title">Personal Details</h3>
              <DetailSubjects>
                <DetailSubjectsItem
                  label="Name"
                  value={props.staffMember.fullName}
                />
                <DetailSubjectsItem
                  label="Gender"
                  value={props.staffMember.gender}
                />
                <DetailSubjectsItem
                  label="Date of Birth"
                  value={
                    props.staffMember.dateOfBirth
                      ? props.staffMember.dateOfBirth
                      : "N / A"
                  }
                />
              </DetailSubjects>
            </DetailContent>
          </Detail>
          <Detail>
            <DetailPointer number="4" />
            <DetailContent>
              <h3 className="boss-details__title">Contact Details</h3>
              <DetailSubjects>
                <DetailSubjectsItem
                  classLabel="boss-details__label_size_small"
                  classValue="boss-details__value_adjust_wrap"
                  label="Email Address"
                  value={props.staffMember.email}
                />
                <DetailSubjectsItem
                  classLabel="boss-details__label_size_small"
                  label="Phone Number"
                  value={props.staffMember.phoneNumber}
                />
                <DetailSubjectsItem
                  classLabel="boss-details__label_size_small"
                  label="Address"
                >
                  <span className="boss-details__value-line">
                    {props.staffMember.address}
                  </span>
                  <span className="boss-details__value-line">
                    {props.staffMember.country}
                  </span>
                  <span className="boss-details__value-line">
                    {props.staffMember.county}
                  </span>
                  <span className="boss-details__value-line">
                    {props.staffMember.postcode}
                  </span>
                </DetailSubjectsItem>
              </DetailSubjects>
            </DetailContent>
          </Detail>
        </>
      )}
    </>
  );
};

export default DetailsList;
