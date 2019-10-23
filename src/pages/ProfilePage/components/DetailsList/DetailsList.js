import React from "react";
import Detail from "./Detail/Detail";
import DetailPointer from "./DetailPointer/DetailPointer";
import DetailContent from "./DetailContent/DetailContent";
import DetailSubjects from "./DetailSubjects/DetailSubjects";
import DetailSubjectsItem from "./DetailSubjectsItem/DetailSubjectsItem";

const DetailsList = props => {
  return (
    <>
      <Detail>
        <DetailPointer number="1" />
        <DetailContent>
          <h3 class="boss-details__title">Employment Details</h3>
          <DetailSubjects>
            <DetailSubjectsItem label="Main Venue" value="McCoolay’s" />
            <DetailSubjectsItem label="Other Venues" value="N / A" />
            <DetailSubjectsItem label="Start Date" value="Tue 11/15/2016" />
            <DetailSubjectsItem label="Pay Rate" value="Age 18-20" />
            <DetailSubjectsItem label="Hour Preference" value="20 - 25" />
            <DetailSubjectsItem
              label="Day Preference"
              value="Thursday / Saturday / Sunday"
            />
            <DetailSubjectsItem
              label="National Insurance Number"
              value="PE630024B"
            />
            <DetailSubjectsItem label="Sage ID" value="260" />
            <DetailSubjectsItem label="Status Statement" value="A" />
          </DetailSubjects>
        </DetailContent>
      </Detail>
      <Detail>
        <DetailPointer number="2" />
        <DetailContent>
          <h3 class="boss-details__title">Account Details</h3>
          <DetailSubjects>
            <DetailSubjectsItem label="Created" value="Mon 11/14/2016" />
          </DetailSubjects>
        </DetailContent>
      </Detail>
      <Detail>
        <DetailPointer number="3" />
        <DetailContent>
          <h3 class="boss-details__title">Personal Details</h3>
          <DetailSubjects>
            <DetailSubjectsItem label="Name" value="Trulla Collier" />
            <DetailSubjectsItem label="Gender" value="Female" />
            <DetailSubjectsItem label="Date of Birth" value="23 April 1999" />
          </DetailSubjects>
        </DetailContent>
      </Detail>
      <Detail>
        <DetailPointer number="4" />
        <DetailContent>
          <h3 class="boss-details__title">Contact Details</h3>
          <DetailSubjects>
            <DetailSubjectsItem label="Name" value="Trulla Collier" />
            <DetailSubjectsItem label="Gender" value="Female" />
            <DetailSubjectsItem label="Date of Birth" value="23 April 1999" />
          </DetailSubjects>
        </DetailContent>
      </Detail>
      {/* 
      <div class="boss-page-main__isle">
        <section class="boss-details">
          <p class="boss-details__pointer">
            <span class="boss-details__pointer-text">4</span>
          </p>
          <div class="boss-details__content">
            <h3 class="boss-details__title">Contact Details</h3>
            <ul class="boss-details__list">
              <li class="boss-details__item">
                <p class="boss-details__label boss-details__label_size_small">
                  Email Address
                </p>
                <p class="boss-details__value boss-details__value_adjust_wrap">
                  trulla.collier@yahoo.com
                </p>
              </li>
              <li class="boss-details__item">
                <p class="boss-details__label boss-details__label_size_small">
                  Phone Number
                </p>
                <p class="boss-details__value">+123 342 342</p>
              </li>
              <li class="boss-details__item">
                <p class="boss-details__label boss-details__label_size_small">
                  Address
                </p>
                <p class="boss-details__value">
                  <span class="boss-details__value-line">
                    907 Charisse Junction
                  </span>
                  <span class="boss-details__value-line">New Jersey</span>
                  <span class="boss-details__value-line">Monaco</span>
                  <span class="boss-details__value-line">42448</span>
                </p>
              </li>
            </ul>
          </div>
        </section>
      </div> */}
    </>
  );
};

export default DetailsList;
